const router = require('express').Router()
const auth = require('../../../_config/authentication/index')

const controller = require('../controllers')

router.post('/login/', controller.authenticate)
router.post('/pswd', controller.changePswd)

// router.post('/', auth.authorize([global.perfis.administrador, global.perfis.liderCurador, global.perfis.curador, global.perfis.deliveryManager]), controller.create)
router.post('/', controller.create) // TODO Colocar autenticação de volta

router.get('/home', auth.authorize(), controller.home)

// router.put('/:id', auth.authorize([global.perfis.administrador, global.perfis.liderCurador, global.perfis.curador, global.perfis.deliveryManager]), controller.update)
router.put('/:id', controller.update)

// router.delete('/:id', auth.authorize([global.perfis.administrador, global.perfis.liderCurador, global.perfis.curador, global.perfis.deliveryManager]), controller.delete)
router.delete('/:id', controller.delete)

router.get('/:id', auth.authorize([global.perfis.administrador, global.perfis.liderCurador, global.perfis.curador, global.perfis.deliveryManager]), controller.getById)
router.get('/', controller.getAll)

module.exports = router
