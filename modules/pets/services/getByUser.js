const encodeImage = require('../../../utils/encodeImage')

module.exports = (Repo, RepoFiles) => async (id) => {
	try {
		const pets = await Repo.getByUser(id)
		for (const pet of pets) {
			const file = await RepoFiles.getByPet(pet.id)
			if (file) {
				if (file.isBloob) {
					file.photo = await encodeImage(`${file.photo}`)
				}
				pet.file = file
			}
		}
		return pets
	} catch (error) {
		throw error
	}
}
