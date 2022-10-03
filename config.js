require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  dbUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/telegrom',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files'
}

module.exports = config;