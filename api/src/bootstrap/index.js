module.exports = async function (app) {
  try {
    await Promise.all([
      require('./createUsers')(app)
    ]);
  } catch(err) {
    console.log(err);
  }
};
