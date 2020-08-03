const router = require('express').Router()
const cDocument = require('../controllers/document')

router.post('/', cDocument.createDocument)
router.post('/share/', cDocument.sharedDocument)
router.put('/:id', cDocument.updateDocument)
router.get('/record/:id', cDocument.getAllRecordByDoc)

module.exports = router