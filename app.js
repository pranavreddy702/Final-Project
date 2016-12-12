require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

const homeRouter = require('./routes/home');
// const chartRouter = require('./routes/chart');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));
app.use('/', homeRouter)
// app.use('/', chartRouter)

app.listen(PORT, () => console.log('listening on port ', PORT));

