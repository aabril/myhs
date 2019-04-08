const dotenv = require('dotenv');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
function loadEnvService() {
  const isProd = (process.env.NODE_ENV==="PROD")
  const isBeta = (process.env.NODE_ENV==="BETA")
  
  if(isProd){
    dotenv.config({ path: './config/oio.cat.env' });
  }else if(isBeta){
    dotenv.config({ path: './config/default.env' });
  }else{
    dotenv.config({ path: './config/default.env' });
  }
}

module.exports = loadEnvService