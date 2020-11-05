const Service = require('../services')
module.exports = {

	home: require('./home')(Service),

	authenticate: require('./authenticate')(Service),
	changePswd: require('./changePswd')(Service),

	create: require('./create')(Service),
	update: require('./update')(Service),
	delete: require('./delete')(Service),

	getAll: require('./getAll')(Service),
	getById: require('./getById')(Service)

}
