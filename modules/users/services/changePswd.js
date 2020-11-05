const { Erro, ErrorType } = require('../../../_config/error')
const encryptPswd = require('../../../_config/actions/encryptPswd')

module.exports = (Repo) => async (body) => {
	body.senhaAtual = encryptPswd(body.senhaAtual)
	body.novaSenha = encryptPswd(body.novaSenha)
	try {
		const usuarioPorId = await Repo.getById(body.id)
		if (!usuarioPorId.length) {
			throw new Erro(ErrorType.USUARIO_NAO_ENCONTRADO)
		}
		const user = await Repo.changePswd(body)
		if (!user.length) {
			throw new Erro(ErrorType.SENHA_ATUAL_NAO_CONFERE)
		}
		return { msg: 'password alterada com sucesso!' }
	} catch (error) {
		throw error
	}
}
