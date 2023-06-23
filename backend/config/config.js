require('dotenv').config({ path: './config/config.env' });

const config = {
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
};

module.exports = config;