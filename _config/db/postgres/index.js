const conf = require('./config')
const pgp = require('pg-promise')({})
const pgpdb = pgp(conf.str)
module.exports = pgpdb
