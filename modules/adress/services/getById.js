module.exports = (Repo) => async (id) => {
	try {
		const user = await Repo.getById(id)
		return user[0]
	} catch (error) {
		throw error
	}
}
