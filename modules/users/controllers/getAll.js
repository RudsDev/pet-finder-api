module.exports = (Service) => async (req, res, next) => {
	const query = req.query
	try {
		const users = await Service.getAll(query)
		return global.callback200(res, users)
	} catch (error) {
		return next(error)
	}
}
