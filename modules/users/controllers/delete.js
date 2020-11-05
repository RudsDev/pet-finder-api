module.exports = (Service) => async (req, res, next) => {
	try {
		const user = await Service.delete(req.params.id)
		return global.callback200(res, user)
	} catch (error) {
		return next(error)
	}
}
