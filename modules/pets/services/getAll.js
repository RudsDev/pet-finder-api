const encodeImage = require('../../../utils/encodeImage')

module.exports = (Repo, RepoFiles) => async (userID) => {
	try {
		const pets = await Repo.getAll()
		for (const pet of pets) {
			const file = await RepoFiles.getByPet(pet.id)
			if (file) {
				if (file.isBloob) {
					file.photo = await encodeImage(`${file.photo}`)
				}
				pet.file = file
			}

			if (userID) {
				const favorite = await Repo.isFavorite({user: userID, pet: pet.id})
				pet.favorite = favorite ? favorite.id : null
			}
		}
		return pets
	} catch (error) {
		throw error
	}
}
