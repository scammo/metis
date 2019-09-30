const { fastJoin } = require('feathers-hooks-common');

const boxResolvers = {
  joins: {
    warehouse: () => async (box, ctx) => {
      box.warehouse = box.warehouseId ? await ctx.app.service('warehouse').get(box.warehouseId) : null;
    },
    workgroups: () => async (box, ctx) => {
      box.workgroup = box.workgroupId ? await ctx.app.service('workgroups').get(box.workgroupId): null;
    },
    boxtypes: () => async (box, ctx) => {
      box.boxtype = box.boxtypeId ? await ctx.app.service('boxtypes').get(box.boxtypeId): null;
    }
  }
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [fastJoin(boxResolvers)],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
