module.exports = async function (app) {
  try {
    await Promise.all([
      require('./createUsers')(app),
      require('./createInsuranceSparten')(app)
    ]);
  } catch(err) {
    console.log(err);
  }
};
