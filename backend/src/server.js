const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');

const app = express();

global.IP_ADDRESS = 'http://192.168.10.11:3333';
//⬇ coloque o linke do banco de dados aqui ⬇
const SwapUp = 'mongodb+srv://senha:senha@omnistack-7qsat.mongodb.net/test?retryWrites=true&w=majority';
// ⬆ coloque o linke do banco de dados aqui ⬆
mongoose.connect(SwapUp, {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/images', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
app.use(routes);

app.listen(process.env.PORT || 3333);
