const Service = require('./../services')
module.exports = {
	home: require('./create')(Service),

	create: require('./create')(Service),
	update: require('./update')(Service),
	delete: require('./delete')(Service),

	getAll: require('./getAll')(Service),
	getById: require('./getById')(Service),
	getByUser: require('./getByUser')(Service),

	favorite: require('./favorite')(Service),
	unfavorite: require('./unfavorite')(Service),
	getFavorites: require('./getFavorites')(Service)
}
