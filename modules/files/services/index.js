const Repo = require('./../repositories')
module.exports = {
	create: require('./create')(Repo),

	getByPet: require('./getByPet')
}
