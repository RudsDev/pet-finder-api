
const repo = (pgpdb) => (body) => {
	let colums = 'id, state, city, street, home_number'
	let values = '$<id>, $<state>, $<city>, $<street>, $<home_number>'
	const returnig = 'RETURNING id, state, city, street, home_number'
	const queryInsert = `INSERT INTO adress (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(queryInsert, body)
}
module.exports = repo
