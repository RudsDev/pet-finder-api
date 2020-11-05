module.exports = (pgpdb) => (id) => {
	const colums = 'u.id, u.password, u.name, u.email, a.state, a.city'
	const queryInsert = `
	SELECT
		${colums}
	FROM
		users u
		INNER JOIN adress a on a.id = u.id_adress
	WHERE
		u.id = $<id>;
	`
	return pgpdb.oneOrNone(queryInsert, {id})
}
