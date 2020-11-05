module.exports = (Service) => async (req, res, next) => {
	try {
		const user = await Service.create(req.body)
		return global.callback201(res, user)
	} catch (error) {
		return next(error)
	}
}
