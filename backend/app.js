const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');
const auth = require('./middlewares/auth');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/papelaria_start")
.then(()=>{
  console.log("Database is successfully connected");
});

const { PORT = 3000 } = process.env;

app.use(function (req, res, next) {

  if (req.originalUrl === '/users/signin' || req.originalUrl === '/users/signup') {
    return next();
  } else {
    return auth(req, res, next);
  }
});

app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

app.use((err, req, res, next) => {
   console.log("err:" + err)

  res.status(err.statusCode).send({ message: err.message });
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));