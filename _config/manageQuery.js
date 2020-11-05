const manageSkip = (query) => {
	return ((!!query) && !query.skip) ? 0 : query.skip
}
const manageQtd = (query = '') => {
	return ((!!query) && !query.take) ? 20 : query.take
}

module.exports = { manageSkip, manageQtd }
