const decodeImage = async (base64Data) => {
	// Decode function
	const decodeBase64Image = (dataString) => {
		let matches = dataString.match(/^data:([A-Z/a-z-+;]+)base64,(.+)$/)
		let response = {}
		if (matches.length !== 3) {
			return new Error('Invalid input string')
		}
		response.type = matches[1]
		response.data = Buffer.from(matches[2], 'base64')
		return response
	}

	try {
		// This regular image extracts the "jpeg" from "image/jpeg"
		let imageTypeRegularExpression = /\/(.*?)$/

		// Generate random string
		let crypto = require('crypto')
		let seed = crypto.randomBytes(20)
		let uniqueSHA1String = crypto.createHash('sha1')
			.update(seed)
			.digest('hex')

		let imageBuffer = decodeBase64Image(base64Data)
		let tempFolder = '.\\temp\\'
		let uniqueName = 'file-' + uniqueSHA1String

		let imageTypeDetected = imageBuffer.type.match(imageTypeRegularExpression)
		let userUploadedImagePath = tempFolder + uniqueName + '.' + imageTypeDetected[1]
		userUploadedImagePath = userUploadedImagePath.replace(';', '')

		await require('fs').writeFileSync(userUploadedImagePath, imageBuffer.data)
		const file = {
			fullPath: `${global.__basedir}${userUploadedImagePath.replace('.\\', '\\')}`,
			relativePath: tempFolder,
			extension: imageTypeDetected[1].replace(';', ''),
			type: imageBuffer.type.replace(';', '')
		}
		return file
	} catch (error) {
		throw new Error(error)
	}
}

module.exports = decodeImage
