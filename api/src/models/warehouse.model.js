// warehouse-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const warehouse = new Schema({
    city: { type: String, required: true },
    adress: { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('warehouse', warehouse);
};
