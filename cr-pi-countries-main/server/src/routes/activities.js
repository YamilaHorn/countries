const {Router} = require('express')
const getActivities = require('../controllers/getActivities')
const postActivities = require('../controllers/postActivities')

const router = Router()

router.post('/',postActivities)

router.get('/',getActivities)

module.exports = router;