module.exports = (pgpdb) => (id, obj) => {
	const returnig = 'RETURNING id, species, name, breed, age, weight, id_user'
	const sets = `species = '${obj.species}', name = '${obj.name}', breed = '${obj.breed}', age = '${obj.age}', weight = '${obj.weight}', id_user = '${obj.id_user}'`
	const querySql = `UPDATE pets SET ${sets} WHERE id = '${id}' ${returnig};`
	return pgpdb.one(querySql)
}
