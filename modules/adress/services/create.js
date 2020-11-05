const Guid = require('guid')
module.exports = (Repo) => async (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	body.id = id
	try {
		const adress = await Repo.create(body)
		return adress
	} catch (error) {
		throw error
	}
}
