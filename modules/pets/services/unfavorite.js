module.exports = (Repo) => async (id) => {
	try {
		await Repo.unfavorite(id)
		return false
	} catch (error) {
		throw error
	}
}
