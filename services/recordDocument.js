const RecordDocument = require('../models/recordDocument')
const Document = require('../models/document')

async function createRecord(data) {
  console.log(data)
  await RecordDocument.create(data)
}

async function getAllRecordByDoc(idDoc) {
  const record = await RecordDocument.findAll({
    where: { documentId: idDoc},
    order: [['createdAt','asc']]
  })
  console.log(record)
  return record
}

module.exports = {
  createRecord,
  getAllRecordByDoc
}