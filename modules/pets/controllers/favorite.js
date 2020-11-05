module.exports = (Service) => async (req, res, next) => {
	try {
		const favorited = await Service.favorite(req.body)
		return global.callback201(res, favorited)
	} catch (error) {
		return next(error)
	}
}
