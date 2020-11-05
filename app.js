require('./_config/globals')

const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const allowCors = require('./_config/cors')
const errorHandler = require('./_config/error/handler')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json({ limit: '60mb' }))
app.use(bodyParser.urlencoded({ extended: false, limit: '60mb' }))
app.use(cookieParser())
app.use(allowCors)

// routes
/* Cria as rotas dinamicamente a partir da pasta modules */
let api = {}
let modules = require('./_config/getModules')('./modules/')
const createRoutes = (element, index) => {
	api[element] = require('./modules/' + element + '/routes')
	app.use('/api/' + element, api[element])
}
modules.forEach(createRoutes)

// If no route is matched, it must be 404
app.use((req, res, next) => res.status(404).end())

// error handler
app.use(errorHandler)

// root folder
global.__basedir = __dirname
global.__imageExportDirFullPath = 'C:\\Users\\rudsd\\Documents\\projects\\pet_finder_api\\temp\\export\\'

module.exports = app
