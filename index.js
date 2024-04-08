const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
app.use('/api/products', productRoute);

mongoose
  .connect(
    'mongodb+srv://ole:ardhi1995@backenddb.gcsfrmh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB'
  )
  .then(() => {
    console.log('Connected to database');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Coneected failed');
  });
