module.exports = (Service) => async (req, res, next) => {
	try {
		const users = await Service.update(req.params.id, req.body)
		return global.callback200(res, users)
	} catch (error) {
		return next(error)
	}
}
