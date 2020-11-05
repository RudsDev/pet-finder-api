module.exports = (Service) => async (req, res, next) => {
	try {
		const users = await Service.getAll(req.params.id)
		return global.callback200(res, users)
	} catch (error) {
		return next(error)
	}
}
