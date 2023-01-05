const express = require('express');
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

//Import and Use Route
const productRoute = require('./routes/productRoute');
app.use('/api/v1', productRoute);

//Use Error Middleware
app.use(errorMiddleware);

module.exports = app;