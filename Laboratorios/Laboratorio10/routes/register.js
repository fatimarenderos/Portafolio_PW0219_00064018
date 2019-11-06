var express = require ('express')
var router = express.Router()
const registerController = require('../Controllers/registerController')
router.get('/', registerController.getAll)
router.get('/:id', registerController.getOnebyId)
router.post('/insert', registerController.insert)
router.put('/update', registerController.update)
router.delete('/delete', registerController.delete)

module.exports = router