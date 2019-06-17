// Initializes the `workgroups` service on path `/workgroups`
const createService = require('feathers-mongoose');
const createModel = require('../../models/workgroups.model');
const hooks = require('./workgroups.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/workgroups', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('workgroups');

  service.hooks(hooks);
};
