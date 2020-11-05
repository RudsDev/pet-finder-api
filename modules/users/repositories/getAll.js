const { manageSkip, manageQtd } = require('../../../_config/manageQuery')

module.exports = (pgpdb) => (query) => {
	const qtd = manageQtd(query)
	const skip = manageSkip(query) * qtd

	let filteredQuery = ' order by ' + (query.orderBy ? query.orderBy : 'name') + ' ' + (query.order ? query.order : 'asc')

	const querySql = `SELECT * FROM
	users ${filteredQuery}
	offset ${skip} rows
	FETCH NEXT ${qtd} rows only`
	return pgpdb.any(querySql)
}
