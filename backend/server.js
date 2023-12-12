

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 

const app = express();
const PORT = process.env.PORT || 3001;


mongoose.connect('mongodb://localhost/ecomerce-backend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);



app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
