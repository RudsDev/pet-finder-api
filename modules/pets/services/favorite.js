const Guid = require('guid')
module.exports = (Repo) => async (favorited) => {
	try {
		const id = (favorited.id) ? favorited.id : Guid.raw()
		favorited.id = id
		const data = await Repo.favorite(favorited)
		return data.id
	} catch (error) {
		throw error
	}
}
