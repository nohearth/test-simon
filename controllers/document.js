const sDocument = require('../services/document')
const sRecordDocument = require('../services/recordDocument')

async function createDocument(req, res) {
  try {
    await sDocument.createDocument(req.body)
    res.json({message: 'Create success'})
  } catch (e) {
    res.json({message: e})
  }
}

async function updateDocument(req, res) {
  try {
    await sDocument.updateDocument(req.params.id, req.body)
    res.json({message: 'Update success'})
  } catch (e) {
    res.json({message: e})
  }
}

async function getAllRecordByDoc(req, res) {
  try {
    const document = await sRecordDocument.getAllRecordByDoc(req.params.id)
    res.json(document)
  } catch (e) {
    res.json({message: e})
  }
}

async function sharedDocument(req, res) {
  try {
    await sDocument.sharedDocument(req.body)
    res.json({message: 'Share success'})
  } catch (e) {
    
    res.json({message: e})
  }
}

async function getAllDocumentByUser(req, res) {
  try {
    const document = await sDocument.getAllDocumentByUser(req.params.id)
    res.json(document)
  } catch (e) {
    res.json({message: e})
  }
}

module.exports = {
  createDocument,
  updateDocument,
  getAllRecordByDoc,
  sharedDocument,
  getAllDocumentByUser
}