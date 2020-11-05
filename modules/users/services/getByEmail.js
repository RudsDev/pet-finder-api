module.exports = (Repo) => async (email) => {
	try {
		const user = await Repo.getByEmail(email)
		return user[0]
	} catch (error) {
		throw error
	}
}
