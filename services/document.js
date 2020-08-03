const sUser = require('./user')
const sRecordDocument = require('./recordDocument')

const User = require('../models').User
const Document = require('../models').Document
const SharedDocument = require('../models').SharedDocument


async function createDocument(data) {
  const user = await sUser.getUser(data.userId)
  data.ownerName = user.name
  
  const document = await Document.create(data)
  const recordData = {
    documentId: document.id,
    description: 'CREATED',
    recordDate: document.createdAt
  }
  await sRecordDocument.createRecord(recordData)
}

async function getDocument(id) {
  const document =  await Document.findOne({
    where: {id}
  })
  return document
}

async function updateDocument(id, data) {
  const document = await getDocument(id)
  const recordData = {
    documentId: document.id,
    description: 'UPDATED',
    recordDate: document.updatedAt
  }
  await sRecordDocument.createRecord(recordData)
  return document.update(data)
}

async function sharedDocument(data) {
  const user = await sUser.getUser(data.userId)
  const document = await getDocument(data.documentId)
  
  await document.addUser(user, { through: { selfGranted: false } })
}

async function getAllDocumentByUser(id) {
  const document =  await User.findOne({
    where: {id},
    include: [Document, {
      model: SharedDocument,
      include: [Document]
    }]
  })
  return document
}

module.exports = {
  createDocument,
  updateDocument,
  sharedDocument,
  getAllDocumentByUser
}