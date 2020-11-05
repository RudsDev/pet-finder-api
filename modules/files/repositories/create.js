const repo = (pgpdb) => (f) => {
	let colums = 'id, id_pet, file_name, file_type, file_ftp_path, is_bloob, file_extension'
	let values = `'${f.id}', '${f.petId}', '${f.name}', '${f.type}', '${f.ftpPath}', ${f.isBloob}, '${f.extension}'`
	const returnig = 'RETURNING id_pet, file_ftp_path, is_bloob'
	const queryInsert = `INSERT INTO pets_images (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(queryInsert, f)
}
module.exports = repo
