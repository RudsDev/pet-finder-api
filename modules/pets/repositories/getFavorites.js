module.exports = (pgpdb) => (userID) => {
	let colums = 'id, species, name, breed, age, weight'
	let subSelect = `SELECT DISTINCT id_pet FROM favorites WHERE id_user = '${userID}'`
	const queryInsert = `SELECT ${colums} FROM pets WHERE id IN (${subSelect});`
	return pgpdb.any(queryInsert)
}
