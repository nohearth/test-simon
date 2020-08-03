const RecordDocument = require('../models').RecordDocument

async function createRecord(data) {
  console.log(data)
  await RecordDocument.create(data)
}

async function getAllRecordByDoc(idDoc) {
  const record = await RecordDocument.findAll({
    where: { documentId: idDoc},
    order: [['createdAt','asc']]
  })
  return record
}

module.exports = {
  createRecord,
  getAllRecordByDoc
}