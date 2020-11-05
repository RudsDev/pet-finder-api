const encodeImage = require('../../../utils/encodeImage')

module.exports = (Repo) => async (id) => {
	try {
		const pet = await Repo.getById(id)
		if (pet.photo) {
			const photo = await Repo.getImage(pet)
			pet.photo = await encodeImage(`${photo}`)
		}
		return pet
	} catch (error) {
		throw error
	}
}
