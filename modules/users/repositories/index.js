const pgpdb = require('../../../_config/db/postgres')

module.exports = {

	authenticate: require('./authenticate')(pgpdb),
	// changePswd: require('./changePswd')(tp),

	create: require('./create')(pgpdb),
	update: require('./update')(pgpdb),
	delete: require('./delete')(pgpdb),

	getAll: require('./getAll')(pgpdb),
	getById: require('./getById')(pgpdb),
	getByEmail: require('./getByEmail')(pgpdb)

}
