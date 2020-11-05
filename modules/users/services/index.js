const Repo = require('../repositories')
const ServiceAdress = require('../../adress/services')

module.exports = {

	home: require('./home')(Repo),

	authenticate: require('./authenticate')(Repo),
	changePswd: require('./changePswd')(Repo),

	create: require('./create')(Repo, ServiceAdress),
	update: require('./update')(Repo, ServiceAdress),
	delete: require('./delete')(Repo, ServiceAdress, {}), // TODO Passar ServicePet no lugar do objeto vazio

	getAll: require('./getAll')(Repo),
	getById: require('./getById')(Repo),
	getByEmail: require('./getByEmail')(Repo)

}
