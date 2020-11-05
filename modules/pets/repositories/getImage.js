module.exports = (pgpdb) => (pet) => {
	const file = `${pet.id}.jpeg`
	const fullPath = `${global.__imageExportDirFullPath}${file}`
	const query = `SELECT lo_export(${pet.photo}, '${fullPath}');`
	pgpdb.oneOrNone(query)
	return fullPath
}
