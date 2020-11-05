const config = {}

const prefixUrl = global.appRoot + '/galeria/logs/'

config.erro = {
	level: 'error',
	name: 'daily-error-file',
	timestamp: () => new Date().toLocaleString(),
	filename: prefixUrl + 'erros/erros.log', // filename: require('path').join( process.cwd(), 'erros/log-de-erros.log' ),
	json: true,
	maxsize: 5242880, // 5MB
	tailable: true,
	prepend: true, // winston-daily-rotate-file
	datePattern: 'dd-MM-yyyy_' // winston-daily-rotate-file
}
config.info = {
	level: 'info',
	name: 'daily-info-file',
	timestamp: () => new Date().toLocaleString(),
	filename: prefixUrl + 'infos/infos.log',
	json: true,
	maxsize: 5242880, // 5MB
	tailable: true,
	prepend: true,
	datePattern: 'dd-MM-yyyy_'
}
config.alerta = {
	level: 'warn',
	name: 'daily-warn-file',
	timestamp: () => new Date().toLocaleString(),
	filename: prefixUrl + 'alertas/alertas.log',
	json: true,
	maxsize: 5242880, // 5MB
	tailable: true,
	prepend: true,
	datePattern: 'dd-MM-yyyy_'
}
module.exports = config
