const chalk = require('chalk');
const mongoose = require('mongoose');

/**
 * Connect to MongoDB.
 */
function mongooseService() {
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useNewUrlParser', true);
  mongoose.connect(process.env.MONGODB_URI);
  mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
  });
}

module.exports = mongooseService
