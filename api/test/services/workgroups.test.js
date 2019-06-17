const assert = require('assert');
const app = require('../../src/app');

describe('\'workgroups\' service', () => {
  it('registered the service', () => {
    const service = app.service('workgroups');

    assert.ok(service, 'Registered the service');
  });
});
