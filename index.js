//Import express
const express = require('express');

//Make express as an application
const app = express()

//Import mongoose, that will used to connect this express application with mongodb atlas
const mongoose = require('mongoose');


//Import productRoutes
const productRoutes = require('./routes/product.routes');

//Import .env
const dotenv = require('dotenv');

dotenv.config();


//MiddleWear to convert the json
app.use(express.json());

//Test API
app.get('/testApi', (req, res) => {
  res.send('Hello World!!')
})


//Listen on port 3000
app.listen(3000);


//route
app.use('/api/products', productRoutes);


//MongoDb Connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log('Connected!'))
  .catch((error) => console.log('Connection error:', error));