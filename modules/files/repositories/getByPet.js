module.exports = (pgpdb) => (id) => {
	let colums = 'file_name as name, file_type as type, file_extension as extension, file_ftp_path as ftpPath, is_bloob as isBloob, pet_imagem as photo'
	const queryInsert = `SELECT ${colums} FROM pets_images WHERE id_pet = $<id>;`
	return pgpdb.oneOrNone(queryInsert, {id})
}
