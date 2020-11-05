const {
	Erro,
	ErrorType
} = require('../../../_config/error')
module.exports = (Repo, ServiceAdress) => async (id, body) => {
	try {
		const userById = await Repo.getById(id)
		if (userById) {
			const userByEmail = await Repo.getByEmail(body.email)
			let adress

			if (userByEmail && (userByEmail.email !== userById.email)) {
				throw new Erro(ErrorType.EMAIL_JA_CADASTRADO)
			}

			if (body.adress) {
				adress = await ServiceAdress.update(userById.id_adress, body.adress)
				delete body.adress
				body.id_adress = adress.id
			}

			const user = await Repo.update(id, body)

			if (adress) {
				user.adress = adress
			}

			return user
		}
		return {}
	} catch (error) {
		throw error
	}
}
