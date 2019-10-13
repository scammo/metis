// material-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const material = new Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    durable: { type: Boolean, required: true },
    bestBeforeDate: { type: Date, required: false },
    consumtion: { type: Boolean, required: true },
    oderlink: { type: String, required: false },
    sensivity: { type: String, required: true },
    workgroupId: { type: Schema.Types.ObjectId, required: false },
    boxId: { type: Schema.Types.ObjectId, required: false },
    tags: { type: Array, required: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('material', material);
};
