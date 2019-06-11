const box = require('./box/box.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(box);
};
