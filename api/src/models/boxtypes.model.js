// tags-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const types = new Schema({
    name: { type: String, required: true },
    artNumber: { type:String, required: true },
    imageUrl: { type: String, required: false },
    sizes: { type: String, required: true },
    handgrips: { type: String, required: true },
    producerLink: { type: String, required: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('boxtypes', types);
};
