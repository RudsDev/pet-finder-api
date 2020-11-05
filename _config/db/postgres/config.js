const obj = {
	host: global.environment.postgres.host,
	database: global.environment.postgres.database,
	user: global.environment.postgres.username,
	password: global.environment.postgres.password,
	port: global.environment.postgres.port
}
const str = `postgres://${obj.user}:${obj.password}@${obj.host}:${obj.port}/${obj.database}`
module.exports = {obj, str}
