const router = require('express').Router()
router.delete('/:id', deletPolle)
const {createPoll, getNotifications, GetPollById, reply, deletPolle} = require('../controllers/greenEyeController')

router.post('/', createPoll)

router.get('/my', getNotifications)

router.get('/:id', GetPollById)

router.post('/reply', reply)

router.delete('/:id', deletPolle)

module.exports = router