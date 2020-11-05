const fs = require('fs')

const encodeImage = async (filePath = '') => {
	const extension = filePath.slice((filePath.indexOf('.') + 1))
	const data = `data:image/${extension};base64, `
	try {
		let buff = await fs.readFileSync(filePath)
		let base64data = await buff.toString('base64')
		return data.concat(base64data)
	} catch (error) {
		return undefined
	}
}
module.exports = encodeImage
