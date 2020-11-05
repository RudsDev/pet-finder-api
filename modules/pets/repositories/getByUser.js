module.exports = (pgpdb) => (userID) => {
	let colums = 'id, species, name, breed, age, weight, id_user'
	const queryInsert = `SELECT ${colums} FROM pets WHERE id_user = $<userID>;`
	return pgpdb.any(queryInsert, {userID})
}
