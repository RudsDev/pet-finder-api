module.exports = (pgpdb) => (id) => {
	const colums = 'id, state, city, street, home_number'
	const queryInsert = `SELECT ${colums} FROM adress WHERE id = $<id>;`
	return pgpdb.oneOrNone(queryInsert, {id})
}
