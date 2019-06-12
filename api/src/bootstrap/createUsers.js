module.exports = async function (app) {
  const users = await app.service('user').find({query: {$limit: 0}});
  if (users.total === 0) {
    /*
    await app.service('user').create({
      firstname: 'Torge',
      lastname: 'Jürgensen',
      customerId: '166889323',
      email: 'torge.juergensen@codeanker.de',
      password: '1234'
    });
    await app.service('user').create({
      firstname: 'Barne',
      lastname: 'Jürgensen',
      customerId: '668893',
      email: 'barne.juergensen@codeanker.de',
      password: '1234'
    });
    */
  }
};
