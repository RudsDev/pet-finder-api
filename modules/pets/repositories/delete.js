module.exports = (pgpdb) => (id) => {
	const queryInsert = 'DELETE FROM pets WHERE id = $<id>;'
	pgpdb.none(queryInsert, {id})
}
