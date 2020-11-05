module.exports = (Service) => async (req, res, next) => {
	try {
		const favorites = await Service.getFavorites(req.params.id)
		return global.callback200(res, favorites)
	} catch (error) {
		return next(error)
	}
}
