const Repo = require('./../repositories')
const RepoFiles = require('./../../files/repositories')
module.exports = {
	create: require('./create')(Repo, RepoFiles),
	update: require('./update')(Repo),
	delete: require('./delete')(Repo),

	getAll: require('./getAll')(Repo, RepoFiles),
	getById: require('./getById')(Repo),
	getByUser: require('./getByUser')(Repo, RepoFiles),
	getImage: require('./getImage')(Repo),

	favorite: require('./favorite')(Repo),
	unfavorite: require('./unfavorite')(Repo),
	getFavorites: require('./getFavorites')(Repo, RepoFiles)
}
