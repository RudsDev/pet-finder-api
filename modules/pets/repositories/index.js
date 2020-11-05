const pgpdb = require('./../../../_config/db/postgres')

module.exports = {
	create: require('./create')(pgpdb),
	update: require('./update')(pgpdb),
	delete: require('./delete')(pgpdb),

	getAll: require('./getAll')(pgpdb),
	getById: require('./getById')(pgpdb),
	getByUser: require('./getByUser')(pgpdb),
	getImage: require('./getImage')(pgpdb),

	favorite: require('./favorite')(pgpdb),
	unfavorite: require('./unfavorite')(pgpdb),
	isFavorite: require('./isFavorite')(pgpdb),
	getFavorites: require('./getFavorites')(pgpdb)
}
