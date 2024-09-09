const initConfig = require('./initConfig');
const initFiles = require('./initFiles');
const initDockerSecrets = require('./initDockerSecrets');
const normalizeTheme = require('./normalizeTheme');

const initApp = async () => {
  if (!process.env.SECRET) {
    console.error('ERROR: SECRET key is missing in environment variables');
    process.exit(1);
  }
  initDockerSecrets();
  await initFiles();
  await initConfig();
  await normalizeTheme();
};

module.exports = initApp;
