const box = require('./box/box.service.js');
const user = require('./user/user.service.js');
const warehouse = require('./warehouse/warehouse.service.js');
const tags = require('./tags/tags.service.js');
const material = require('./material/material.service.js');
const workgroups = require('./workgroups/workgroups.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(box);
  app.configure(user);
  app.configure(warehouse);
  app.configure(tags);
  app.configure(material);
  app.configure(workgroups);
};
