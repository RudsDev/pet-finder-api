
const repo = (pgpdb) => (body) => {
	let colums = 'id, password, name, email'
	let values = '$<id>, $<password>, $<name>, $<email>'
	if (body.id_adress) {
		colums = 'id, password, name, email, id_adress'
		values = '$<id>, $<password>, $<name>, $<email>, $<id_adress>'
	}
	const returnig = 'RETURNING id, name, email, id_adress'
	const queryInsert = `INSERT INTO users (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(queryInsert, body)
}
module.exports = repo
