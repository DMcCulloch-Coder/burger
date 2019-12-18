const orm = require('../config/orm');

const burger = {
    all: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res)
        })
    },
    insert: (name, cb) => {
        orm.insertOne('burgers', name, (res) => {
            cb(res)
        })
    },
    update: (id, cb) => {
        orm.selectAll('burgers', id, (res) => {
            cb(res)
        })
    }
}

module.exports = burger