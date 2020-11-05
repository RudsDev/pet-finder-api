module.exports = (Repo) => async (id) => {
	try {
		const user = await Repo.getById(id)
		return user
	} catch (error) {
		throw error
	}
}
