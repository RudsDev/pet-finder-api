module.exports = (pgpdb) => (id) => {
	let colums = 'id, species, name, breed, age, weight, id_user'
	const queryInsert = `SELECT ${colums} FROM pets WHERE id = $<id>;`
	return pgpdb.oneOrNone(queryInsert, {id})
}
