module.exports = (Repo) => async (id) => {
	try {
		const file = await Repo.getByUser(id)
		return file
	} catch (error) {
		throw error
	}
}
