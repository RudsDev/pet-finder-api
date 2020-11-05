const { Erro, ErrorType } = require('../../../_config/error')
const auth = require('../../../_config/authentication/index')
const encryptPswd = require('../../../_config/actions/encryptPswd')

module.exports = (Repo) => async (body) => {
	try {
		const password = encryptPswd(body.password)
		const user = await Repo.authenticate(body.email, password)
		if (!user) {
			throw new Erro(ErrorType.USUARIO_INVALID)
		}
		const token = auth.autenticar(user)
		return Object.assign({ token })
	} catch (error) {
		throw error
	}
}
