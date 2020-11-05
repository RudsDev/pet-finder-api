const repo = (pgpdb) => (favorited) => {
	let colums = 'id, id_user, id_pet'
	let values = `'${favorited.id}', '${favorited.user}', '${favorited.pet}'`
	const returnig = 'RETURNING id'
	const queryInsert = `INSERT INTO favorites (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(queryInsert)
}
module.exports = repo
