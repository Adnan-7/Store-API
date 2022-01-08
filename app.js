require('dotenv').config();

// async error

const express = require('express');
const app = express();

const errorMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');

// middleware
app.use(express.json());

// routes

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1> <a href="/api/v1/products">products route</a>');
});

// product route

app.use(errorMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //   connect db
    app.listen(port, console.log(`Server listening on Port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
