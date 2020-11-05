module.exports = (Repo) => async (query) => {
	try {
		const users = await Repo.getAll(query)
		return users
	} catch (error) {
		throw error
	}
}
