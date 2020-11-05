module.exports = (pgpdb) => (id, obj) => {
	const querySql = `UPDATE users
									SET
										name = $<name>,
										email = $<email>
									WHERE id = '${id}' RETURNING id, name, email, id_adress;`
	return pgpdb.one(querySql, obj)
}
