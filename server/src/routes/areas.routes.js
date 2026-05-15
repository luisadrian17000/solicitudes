const router = require('express').Router()
const { getAll, getById, create, update, remove } = require('../controllers/areas.controller')
const { checkRole } = require('../middleware/authorize')

// short hand para aplicar el middleware a todas las rutas:
router.use(isAuthenticated)

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', checkRole('admin'),create)
router.put('/:id', checkRole('admin'), update)
router.delete('/:id', checkRole('admin'), remove)

module.exports = router
