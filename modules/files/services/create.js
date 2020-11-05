module.exports = (Repo) => async (file) => {
	try {
		await Repo.create(file)
	} catch (error) {
		throw error
	}
}
