// box-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const box = new Schema({
    name: { type: String, required: true },
    kind: { type: String, required: true },
    itemnumber: { type: Number, required: true },
    warehouseid: { type: String, required: true }, /*type: Schema.Types.ObjectId, required: true*/
    weight: { type: String, required: false },
    typeId: { type: String, required: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('box', box);
};
