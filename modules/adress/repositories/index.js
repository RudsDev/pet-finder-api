const pgpdb = require('./../../../_config/db/postgres')

module.exports = {
	create: require('./create')(pgpdb),
	update: require('./update')(pgpdb),
	delete: require('./delete')(pgpdb),

	getById: require('./getById')(pgpdb)
}
