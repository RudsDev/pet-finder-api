module.exports = (pgpdb) => (id, obj) => {
	const returnig = 'RETURNING id, state, city, street, home_number'
	const sets = `street = '${obj.street}', city = '${obj.city}', state = '${obj.state}', home_number = '${obj.home_number}'`
	const querySql = `UPDATE adress SET ${sets} WHERE id = '${id}' ${returnig};`
	return pgpdb.one(querySql)
}
