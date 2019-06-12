/* eslint-disable no-console */
const start = new Date();
const logger = require('./logger');
const app = require('./app');
const delay = require('delay');
const port = app.get('port');
const server = app.listen(port);
const { createLightship } = require('lightship');
const lightship = createLightship();

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

async function probe() {
  try {
    const mongodb = await app.get('mongoClient');
    await new Promise((resolve, reject) => mongodb.admin().ping((err) => err ? reject(err) : resolve()));
    lightship.signalReady();
  } catch(error) {
    lightship.signalNotReady();
  } finally {
    setTimeout(probe, 5000);
  }
}

server.on('listening', async () => {
  try {
    await probe();
    logger.info('Feathers application started on http://%s:%d in %ds', app.get('host'), port, (new Date() - start)/1000);
  } catch(error) {
    console.error(error);
    process.exit(1);
  }
});

lightship.registerShutdownHandler(async () => {
  logger.info('Server is goin down');
  await delay(60 * 1000);
  server.close();
});
