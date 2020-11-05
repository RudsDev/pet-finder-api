const Repo = require('./../repositories')
module.exports = {
	create: require('./create')(Repo),
	update: require('./update')(Repo),
	delete: require('./delete')(Repo),
	getById: require('./getById')(Repo)
}
