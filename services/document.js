const Document = require('../models/document')
const sRecordDocument = require('./recordDocument')
//const db = require('../config/db')

async function createDocument(data) {
  const doc = await Document.create(data)
  const recordData = {
    documentId: doc.id,
    description: 'CREATED',
    recordDate: doc.createdAt
  }
  await sRecordDocument.createRecord(recordData)
  //return doc
}

async function getDocument(id) {
  const doc =  await Document.findOne({
    where: {id}
  })
  return doc
}

async function updateDocument(id, data) {
  const doc = await getDocument(id)
  const recordData = {
    documentId: doc.id,
    description: 'UPDATED',
    recordDate: doc.updatedAt
  }
  await sRecordDocument.createRecord(recordData)
  return doc.update(data)
}

module.exports = {
  createDocument,
  updateDocument
}