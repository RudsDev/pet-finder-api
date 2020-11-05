module.exports = (Service) => async (req, res, next) => {
	try {
		const users = await Service.getById(req.params.id)
		return global.callback200(res, users)
	} catch (error) {
		return next(error)
	}
}
