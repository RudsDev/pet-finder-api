module.exports = (Service) => async (req, res, next) => {
	try {
		const users = await Service.getByUser(req.params.id)
		return global.callback200(res, users)
	} catch (error) {
		return next(error)
	}
}
