const Guid = require('guid')
const {
	Erro,
	ErrorType
} = require('../../../_config/error')
const encryptPswd = require('../../../_config/actions/encryptPswd')

module.exports = (Repo, ServiceAdress) => async (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	const password = encryptPswd(body.password)
	let adress

	body.id = id
	body.password = password

	try {
		if (body.adress) {
			adress = await ServiceAdress.create(body.adress)
			delete body.adress
			body.id_adress = adress.id
		}
		const userEmail = await Repo.getByEmail(body.email) // TODO Primeiro testar se o e-mail é valido
		if (userEmail) {
			throw new Erro(ErrorType.EMAIL_JA_CADASTRADO)
		}

		const user = await Repo.create(body)

		if (adress) {
			user.adress = adress
		}

		return user
	} catch (error) {
		throw error
	}
}
