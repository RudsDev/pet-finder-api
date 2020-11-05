module.exports = (Repo) => async (id) => {
	try {
		const user = await Repo.getById(id)
		if (user) {
			const userResp = {
				id: user.id,
				name: user.name,
				email: user.email
			}
			return userResp
		} else throw new Error('User not found')
	} catch (error) {
		throw error
	}
}
