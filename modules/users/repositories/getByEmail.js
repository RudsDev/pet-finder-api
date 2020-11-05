module.exports = (pgpdb) => (email) => {
	const querySql = 'SELECT id, name, password, email FROM users WHERE email LIKE $<email>;'
	return pgpdb.oneOrNone(querySql, {email})
}
