const encodeImage = require('../../../utils/encodeImage')

module.exports = (Repo, RepoFiles) => async (id) => {
	try {
		const petsFavorites = await Repo.getFavorites(id)
		for (const pet of petsFavorites) {
			const file = await RepoFiles.getByPet(pet.id)
			if (file) {
				if (file.isBloob) {
					file.photo = await encodeImage(`${file.photo}`)
				}
				pet.file = file
			}
		}
		return petsFavorites
	} catch (error) {
		throw error
	}
}
