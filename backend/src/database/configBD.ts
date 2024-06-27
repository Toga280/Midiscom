const mysql = require('mysql2')

export const connection = mysql.createConnection({
  host: 'mysql-toga.alwaysdata.net',
  user: 'toga_midiscom',
  password: 'qz5687rt43qs24dfg6',
  database: 'toga_midiscom',
})

connection.connect((err: any) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ', err)
    return
  }
  console.log('Connexion à la base de données réussie !')
})
