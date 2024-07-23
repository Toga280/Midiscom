import React, { useCallback, useState, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
import axios, { AxiosProgressEvent, CancelTokenSource } from 'axios'

const UploadVideo: React.FC = () => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null)
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null)
  const [uploading, setUploading] = useState<boolean>(false)
  const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null) // Ref to hold the cancel token source

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      // Cancel the previous upload if it exists
      if (cancelTokenSourceRef.current) {
        cancelTokenSourceRef.current.cancel('Upload canceled by the user.')
      }

      const formData = new FormData()
      formData.append('file', file)

      // Create a new CancelToken source
      const cancelTokenSource = axios.CancelToken.source()
      cancelTokenSourceRef.current = cancelTokenSource

      const startTime = performance.now()

      setUploading(true)

      axios
        .post('http://toga.alwaysdata.net/midiscom/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            if (progressEvent.total) {
              const { loaded, total } = progressEvent
              const percentCompleted = Math.round((loaded * 100) / total)
              setUploadProgress(percentCompleted)

              const elapsedTime = (performance.now() - startTime) / 1000 // in seconds
              const uploadSpeed = loaded / elapsedTime // in bytes per second
              const remainingBytes = total - loaded
              const estimatedTimeRemaining = remainingBytes / uploadSpeed

              setTimeRemaining(estimatedTimeRemaining)
            }
          },
          cancelToken: cancelTokenSource.token, // Pass the cancel token
        })
        .then((response) => {
          setUploadProgress(null)
          setTimeRemaining(null)
          setUploading(false)
          console.log(response.data)
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Upload canceled:', error.message)
          } else {
            console.error('Error uploading the file:', error)
          }
          setUploadProgress(null)
          setTimeRemaining(null)
          setUploading(false)
        })
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
  })

  const handleCancelUpload = () => {
    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel('Upload canceled by the user.')
      setUploadProgress(null)
      setTimeRemaining(null)
      setUploading(false)
    }
  }

  return (
    <div>
      <div
        {...getRootProps()}
        style={{ border: '2px dashed #cccccc', padding: '20px' }}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {uploadProgress !== null && (
        <div>
          <p>Upload progress: {uploadProgress}%</p>
          {timeRemaining !== null && (
            <p>Estimated time remaining: {timeRemaining.toFixed(2)} seconds</p>
          )}
        </div>
      )}
      {uploading && <button onClick={handleCancelUpload}>Cancel Upload</button>}
    </div>
  )
}

export default UploadVideo
