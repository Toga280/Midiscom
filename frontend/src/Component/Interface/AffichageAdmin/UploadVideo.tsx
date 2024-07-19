import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'

function UploadVideo() {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const formData = new FormData()
      formData.append('file', file)

      axios
        .post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error uploading the file:', error)
        })
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
  })

  return (
    <div
      {...getRootProps()}
      style={{ border: '2px dashed #cccccc', padding: '20px' }}
    >
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}

export default UploadVideo
