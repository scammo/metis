// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const user = new mongooseClient.Schema({

    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, unique: true, lowercase: true },
    password: { type: String },
    workgroupId: { type: String, required: true },
    hideAlert: { type: Boolean, required: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('user', user);
};
