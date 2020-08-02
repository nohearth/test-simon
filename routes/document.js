const router = require('express').Router()
const cDocument = require('../controllers/document')

router.post('/', cDocument.createDocument)
router.put('/:id', cDocument.updateDocument)
router.get('/record/:id', cDocument.getAllRecordByDoc)

module.exports = router