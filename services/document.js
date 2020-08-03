const sUser = require('./user')
const sRecordDocument = require('./recordDocument')
const User = require('../models').User
const Document = require('../models').Document
const SharedDocument = require('../models').SharedDocument
const { throwException } = require('../utils/validation')


async function createDocument(data) {
  const user = await sUser.getUser(data.userId)
  if(!user) {
    throwException(`The User with the ID ${data.userId} don't exits`)
  }
  data.ownerName = `${user.name} ${user.lastName}`
  
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
  if(!document) {
    throwException(`The Document with the ID ${id} don't exits`)
  }
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
  if(!user) {
    throwException(`The User with the ID ${data.userId} don't exits`)
  }
  const document = await getDocument(data.documentId)
  if(!document) {
    throwException(`The Document with the ID ${data.documentId} don't exits`)
  }
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
  if(!document) {
    throwException(`The User with the ID ${id} don't exits`)
  }
  return document
}

module.exports = {
  createDocument,
  updateDocument,
  sharedDocument,
  getDocument,
  getAllDocumentByUser
}