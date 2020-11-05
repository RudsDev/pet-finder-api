module.exports = (Service) => async (req, res, next) => {
	try {
		const body = req.body
		const user = await Service.authenticate(body)
		return global.callback200(res, user)
	} catch (error) {
		return next(error)
	}
}
