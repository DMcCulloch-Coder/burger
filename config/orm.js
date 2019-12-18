const connection = require('./connection');

const orm = {
    selectAll: (table, cb) => {
        connection.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) {
                return console.log(`Error: ${err}`)
            }
            cb(result)
        })
    },
    insertOne: (table, name, cb) => {
        connection.query(`INSERT INTO ${table} (burger_name, devoured) VALUES ("${name}", false)`, (err, result) => {
            if (err) {
                return console.log(`Error: ${err}`)
            }
            cb(result)
        })
    },
    updateOne: (table, id, cb) => {
        connection.query(`UPDATE ${table} SET ? WHERE ?`,[
            {
                devoured: true
            },
            {
                id
            }
        ], (err, result) => {
            if (err) {
                return console.log(`Error: ${err}`)
            }
            cb(result)
        })
    }
}

module.exports = orm;