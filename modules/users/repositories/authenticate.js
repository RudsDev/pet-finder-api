const loginAdmin = (pgpdb) => (email, pswdEncrypted) => {
	const columns = 'id, name, email, id_adress'
	const filter = `email LIKE '${email}' AND password = '${pswdEncrypted}'`
	const querySql = `SELECT ${columns} FROM users WHERE ${filter};`
	return pgpdb.oneOrNone(querySql)
}
module.exports = loginAdmin
