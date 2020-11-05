module.exports = (Service) => async (req, res, next) => {
	try {
		const data = await Service.unfavorite(req.params.id)
		return global.callback202(res, data)
	} catch (error) {
		return next(error)
	}
}
