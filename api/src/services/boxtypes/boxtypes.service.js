// Initializes the `tags` service on path `/tags`
const createService = require('feathers-mongoose');
const createModel = require('../../models/boxtypes.model');
const hooks = require('./boxtypes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/boxtypes', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('boxtypes');

  service.hooks(hooks);
};
