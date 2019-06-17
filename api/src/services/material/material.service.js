// Initializes the `material` service on path `/material`
const createService = require('feathers-mongoose');
const createModel = require('../../models/material.model');
const hooks = require('./material.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/material', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('material');

  service.hooks(hooks);
};
