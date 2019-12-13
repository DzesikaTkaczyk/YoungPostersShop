const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const loadProductsData = require('./productsData')

const app = express();

const productRoutes = require('./routes/product.routes');
const path = require('path');


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', productRoutes);
app.use(helmet());

mongoose.connect(config.DB, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => {
	console.log('Connected to the database');
	loadProductsData();
});
db.on('error', (err) => console.log('Error ' + err));


app.listen(config.PORT, function(){
  console.log('Server is running on port:', config.PORT);
});
