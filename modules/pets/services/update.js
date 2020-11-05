
module.exports = (Repo) => async (id, body) => {
	try {
		const adress = await Repo.update(id, body)
		return adress
	} catch (error) {
		throw error
	}
}
