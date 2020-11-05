module.exports = (pgpdb) => (id) => {
	const queryInsert = 'DELETE FROM users WHERE id = $<id>;'
	pgpdb.none(queryInsert, {id})
}
