// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
const paymentRoutes = require('./routes/payments');
app.use('/payments', paymentRoutes);

module.exports = app;
