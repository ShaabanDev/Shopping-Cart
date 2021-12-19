const express = require('express');

const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.get('/api/product', (req, res) => {
  res.send(products);
});

app.get('/api/product:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

app.listen(4000, console.log('server running on port 4000'));
