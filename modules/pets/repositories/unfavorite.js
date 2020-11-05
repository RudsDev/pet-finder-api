module.exports = (pgpdb) => (id) => {
	const condicional = `id = '${id}'`
	const query = `DELETE FROM favorites WHERE ${condicional};`
	pgpdb.none(query)
}
