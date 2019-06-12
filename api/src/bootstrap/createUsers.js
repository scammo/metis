module.exports = async function (app) {
  const users = await app.service('user').find({query: {$limit: 0}});
  if (users.total === 0) {
    await app.service('user').create({
      firstname: 'Torge',
      lastname: 'Jürgensen',
      email: 'torge.juergensen@codeanker.de',
      password: '1234'
    });
    await app.service('user').create({
      firstname: 'Barne',
      lastname: 'Jürgensen',
      email: 'barne.juergensen@codeanker.de',
      password: '1234'
    });
    await app.service('user').create({
      firstname: 'Momme',
      lastname: 'Jürgensen',
      email: 'momme.juergensen@codeanker.de',
      password: '1234'
    });

  }
};
