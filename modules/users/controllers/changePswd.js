module.exports = (Service) => async (req, res, next) => {
	try {
		const user = await Service.changePswd(req.body)
		return global.callback200(res, user)
	} catch (error) {
		return next(error)
	}
}
