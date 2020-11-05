
const repo = (pgpdb) => (body) => {
	let colums = 'id, species, name, breed, age, weight, id_user'
	let values = '$<id>, $<species>, $<name>, $<breed>, $<age>, $<weight>, $<id_user>'
	const returnig = 'RETURNING id, species, name, breed, age, weight, id_user'
	const queryInsert = `INSERT INTO pets (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(queryInsert, body)
}
module.exports = repo
