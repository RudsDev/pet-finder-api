const md5 = require('md5')

const encryptPswd = (password) => {
	return md5(password, global.environment.jwt.salt_key)
}

module.exports = encryptPswd
