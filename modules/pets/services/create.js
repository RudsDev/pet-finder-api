const Guid = require('guid')
const decodeImage = require('../../../utils/decodeImage')
const ftp = require('../../../utils/ftp')
const FTP_MODE = true

module.exports = (Repo, RepoFiles) => async (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	body.id = id

	try {
		const file = await decodeImage(body.photo)
		if (FTP_MODE) {
			body.photo = `${body.id}.${file.extension}`
			ftp.upload(file.fullPath, body.photo)
		} else {
			Repo.saveFile(file)
		}
		const alterFile = {
			id: (file.id) ? file.id : Guid.raw(),
			petId: body.id,
			name: `${body.id}.${file.extension}`,
			isBloob: !FTP_MODE,
			ftpPath: body.photo,
			type: file.type,
			extension: file.extension
		}
		const pet = await Repo.create(body)
		pet.file = await RepoFiles.create(alterFile)
		return pet
	} catch (error) {
		throw error
	}
}
