module.exports = (Repo) => async (pet) => {
	try {
		const imagePath = await Repo.getImage(pet)
		return imagePath
	} catch (error) {
		throw error
	}
}
