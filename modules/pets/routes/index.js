const router = require('express').Router()
const auth = require('./../../../_config/authentication/index')

const controller = require('../controllers')

router.post('/', auth.authorize(), controller.create)
// router.post('/', controller.create) // TODO Colocar autenticação de volta

// router.put('/:id', auth.authorize([global.perfis.administrador, global.perfis.liderCurador, global.perfis.curador, global.perfis.deliveryManager]), controller.update)
router.put('/:id', controller.update)

// router.delete('/:id', auth.authorize([global.perfis.administrador, global.perfis.liderCurador, global.perfis.curador, global.perfis.deliveryManager]), controller.delete)
router.delete('/:id', controller.delete)

// router.get('/:id', auth.authorize([global.perfis.administrador, global.perfis.liderCurador, global.perfis.curador, global.perfis.deliveryManager]), controller.getById)
router.get('/', controller.getAll)
router.get('/managed/:id', controller.getAll)
router.get('/:id', controller.getById)
router.get('/user/:id', controller.getByUser)

router.post('/favorite', controller.favorite)
router.delete('/unfavorite/:id', controller.unfavorite)
router.get('/favorites/:id', controller.getFavorites)

module.exports = router
