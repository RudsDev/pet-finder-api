// Winston: https://www.npmjs.com/package/winston
// Tipos de logs: error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5
// Os leveis menores pegam log dos leveis maiores
// Para isolar e os leveis menores não logarem, devemos ter instâncias diferentes
const winston = require('winston')
const config = require('./configs')
require('winston-daily-rotate-file')

const criarInstanciaLogger = config =>
	new winston.Logger({
		transports: [new winston.transports.DailyRotateFile(config)],
		exitOnError: false
	})
const montarJson = (infos) => {
	if (infos) return { quem: infos.quem, fez: infos.fez, onde: infos.onde, quando: new Date().toLocaleString(), extras: infos.extras }
	else return {}
}

const log = {}

log.erro = (msg, log = null) => {
	const logger = criarInstanciaLogger(config.erro)
	logger.error(`Erro: ${msg}`, montarJson(log))
}
log.info = (msg, log = null) => {
	const logger = criarInstanciaLogger(config.info)
	logger.info(`Info: ${msg}`, montarJson(log))
}
log.alerta = (msg, log = null) => {
	const logger = criarInstanciaLogger(config.alerta)
	logger.warn(`Warning: ${msg}`, montarJson(log))
}

module.exports = log
