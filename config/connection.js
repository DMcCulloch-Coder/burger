const mysql = require('mysql');
const connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "root",
        database: "burger_db"
    })
}

connection.connect((e) => {
    if (e) {
        return console.log(`Connection Error: ${e.stack}`)
    }
    console.log(`Connected to db as id ${connection.threadId}`)
})

module.exports = connection;