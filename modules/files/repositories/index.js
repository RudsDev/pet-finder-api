const pgpdb = require('./../../../_config/db/postgres')

module.exports = {
	create: require('./create')(pgpdb),
	getByPet: require('./getByPet')(pgpdb)
}
