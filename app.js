const server = require('./src/server');
const chalk = require('chalk');

/**
 * Start Express server.
 */
server.listen(server.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), server.get('port'), server.get('env'));
  console.log('  Press CTRL-C to stop\n');
});