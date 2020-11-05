module.exports = (Service) => async (req, res, next) => {
	try {
		const id = req.tokenDecoded.id
		const user = await Service.home(id)
		return global.callback200(res, user)
	} catch (error) {
		return next(error)
	}
}
