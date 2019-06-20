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
    BBD: { type: Date, required: false },
    consumtion: { type: String, required: true },
    oderlink: { type: String, required: false },
    sensivity: { type: String, required: true },
    workgroupid: { type: Schema.Types.ObjectId, required: false },
    boxid: { type: Schema.Types.ObjectId, required: false },
    tags: { type: Array, required: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('material', material);
};
