const sUser = require('./user')
const sRecordDocument = require('./recordDocument')

const Document = require('../models').Document
const SharedDocument = require('../models').SharedDocument

async function createDocument(data) {
  const doc = await Document.create(data)
  const recordData = {
    documentId: doc.id,
    description: 'CREATED',
    recordDate: doc.createdAt
  }
  await sRecordDocument.createRecord(recordData)
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

async function sharedDocument(data) {
  const user = await sUser.getUser(data.userId)
  console.log(user)
  const doc = await getDocument(data.documentId)
  console.log(doc)
  await doc.addUser(user, { through: { selfGranted: false } })
}

module.exports = {
  createDocument,
  updateDocument,
  sharedDocument
}