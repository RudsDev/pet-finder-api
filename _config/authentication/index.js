const JWT = require('./jwt')

const Authentication = {}

Authentication.autenticar = (res, usuario, callback) =>
	JWT.autenticar(res, usuario, callback)

Authentication.authorize = (perfis) => (req, res, next) =>
	JWT.authorize(perfis, req, res, next)

Authentication.is_Admin = (req, res, next) =>
	JWT.is_Admin(req, res, next)

Authentication.getUser = (req, res, next) =>
	JWT.getUser(req, res, next)

module.exports = Authentication
