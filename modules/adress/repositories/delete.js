module.exports = (pgpdb) => (id) => {
	const queryInsert = 'DELETE FROM adress WHERE id = $<id>;'
	pgpdb.none(queryInsert, {id})
}
