const RecordDocument = require('../models').RecordDocument
const Document = require('../models').Document


async function createRecord(data) {
  await RecordDocument.create(data)
}

async function getAllRecordByDoc(idDoc) {
  const record = await RecordDocument.findAll({
    where: { documentId: idDoc},
    include: [Document],
    order: [['recordDate','asc']]
  })
  return record
}

module.exports = {
  createRecord,
  getAllRecordByDoc
}