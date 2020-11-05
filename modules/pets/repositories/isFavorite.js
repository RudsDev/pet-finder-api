module.exports = (pgpdb) => (f) => {
	const condicional = `id_user = '${f.user}' AND id_pet = '${f.pet}'`
	const query = `SELECT DISTINCT id FROM favorites WHERE ${condicional} LIMIT 1;`
	return pgpdb.oneOrNone(query)
}
