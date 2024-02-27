const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

router.get('/users', userController.getAllUsers)
router.get('/users/:userId', userController.getOneUser)
router.post('/users', userController.addUser)
router.put('/users/:userId', userController.editUser)
router.delete('/users/:userId', userController.deleteUser)


module.exports = router