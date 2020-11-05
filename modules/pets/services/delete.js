module.exports = (Repo) => async (id) => {
	try {
		await Repo.delete(id)
	} catch (error) {
		throw error
	}
}
