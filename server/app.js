const express = require('express');

const { sequelize } = require('./models');

const app = express();

async function main() {
  await sequelize.sync({ force: true });
}

main();
