const sDocument = require('../services/document')
const sRecordDocument = require('../services/recordDocument')

async function createDocument(req, res) {
  try {
    const doc = await sDocument.createDocument(req.body)
    res.json(doc)
  } catch (e) {
    res.json({message: e})
  }
}

async function updateDocument(req, res) {
  try {
    const doc = await sDocument.updateDocument(req.params.id, req.body)
    res.json({message: 'Success'})
  } catch (e) {
    res.json({message: e})
  }
}

async function getAllRecordByDoc(req, res) {
  try {
    const doc = await sRecordDocument.getAllRecordByDoc(req.params.id)
    res.json(doc)
  } catch (e) {
    res.json({message: e})
  }
}

module.exports = {
  createDocument,
  updateDocument,
  getAllRecordByDoc
}