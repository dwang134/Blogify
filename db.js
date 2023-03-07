const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rifxt0407',
    database: 'blogify'
})

module.exports= db;