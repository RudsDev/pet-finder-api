const jwt = require('jsonwebtoken')
const getToken = require('./../getToken')
const { Erro, ErrorType } = require('./../../../_config/error')
const saltKey = global.environment.jwt.salt_key
const expiresIn = global.environment.jwt.time_expires_token

const JWT = {}

const verificaToken = (token) => new Promise((resolve, reject) => {
	jwt.verify(token, saltKey, (err, tokenDecoded) => {
		if (err) {
			reject(new Erro(ErrorType.INVALID_TOKEN))
		} else {
			resolve(tokenDecoded)
		}
	})
})

JWT.autenticar = (usuario) => {
	const loginData = {
		id: usuario.id,
		nome: usuario.nome,
		email: usuario.email
	}
	const options = { expiresIn }
	return jwt.sign(loginData, saltKey, options)
}

JWT.authorize = async (levels = [], req, res, next) => {
	try {
		let token = getToken(req)
		if (token) {
			const tokenDecoded = await verificaToken(token)
			req.tokenDecoded = tokenDecoded
			return next()
		} else {
			console.log('*** TOKEN AUSENTE ***')
			throw new Erro(ErrorType.NO_TOKEN)
		}
	} catch (err) {
		next(err)
	}
}

JWT.isAdmin = (req, res, next) => {
	let token = getToken(req)

	if (!token) throw new Erro(ErrorType.UNAUTHORIZED)
	else {
		jwt.verify(token, saltKey, (err, tokenDecoded) => {
			if (err) throw new Erro(ErrorType.INVALID_TOKEN)
			else {
				if (tokenDecoded.admin) next()
				else throw new Erro(ErrorType.UNAUTHORIZED)
			}
		})
	}
}

JWT.getUser = (req, res, next) => {
	let token = getToken(req)

	if (!token) throw new Erro(ErrorType.UNAUTHORIZED)
	else {
		jwt.verify(token, saltKey, (err, tokenDecoded) => {
			if (err) throw new Erro(ErrorType.INVALID_TOKEN)
			else {
				req.tokenDecoded = tokenDecoded
				next()
			}
		})
	}
}

module.exports = JWT
