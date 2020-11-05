module.exports = (pgpdb) => () => {
	let colums = 'id, species, name, breed, age, weight, id_user as user'
	const query = `SELECT ${colums} FROM pets;`
	return pgpdb.any(query)
}
