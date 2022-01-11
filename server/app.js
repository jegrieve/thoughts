const express = require('express');
const api = require('./api');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { sequelize } = require('./models');
const bodyParser = require('body-parser');
require('./auth/passport');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/api/v1', api);

app.listen({ port: 5000 }, async () => {
  console.log('Server running on localhost:5000');
  await sequelize.authenticate();
  console.log('Database Connected!');
});
