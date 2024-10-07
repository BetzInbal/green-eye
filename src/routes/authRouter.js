const  authController = require('../controllers/authController')
const { onlySoldiersAndCommanders } = require('../middlewares/authMiddlewares')


const router = require('express').Router()

router.post('/login',authController.login)

router.delete('/logout', onlySoldiersAndCommanders, authController.logout)


module.exports = router