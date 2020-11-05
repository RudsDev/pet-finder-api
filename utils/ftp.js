const Client = require('ftp')
const client = new Client()

const config = {
	host: 'localhost',
	port: '21',
	user: 'pet',
	password: 'pet1234',
	connTimeout: '20000'
}

const upload = (originPath, destinationPath) => {
	client.on('ready', () => {
		client.put(originPath, destinationPath, (err) => {
			if (err) throw err
			client.end()
		})
	})
	client.connect(config)
}

module.exports = { upload }
