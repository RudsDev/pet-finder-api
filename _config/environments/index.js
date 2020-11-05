module.exports = () => {
	return require(`./../environments/inc/${process.env.NODE_ENV}.json`)
}
