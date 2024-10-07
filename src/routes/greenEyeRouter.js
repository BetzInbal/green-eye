const router = require('express').Router()
const {createPoll, getNotifications, GetPollById, reply, deletPolle} = require('../controllers/greenEyeController')
const { onlyCommanders, onlySoldiersAndCommanders } = require('../middlewares/authMiddlewares')

router.post('/',onlyCommanders, createPoll)

router.get('/my', onlySoldiersAndCommanders, getNotifications)

router.get('/:id', onlyCommanders, GetPollById)

router.post('/reply',onlySoldiersAndCommanders, reply)

router.delete('/:id', onlyCommanders, deletPolle)

module.exports = router