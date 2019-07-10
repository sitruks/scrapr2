const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');

const hb = require("./config/handlebars");
const indexRouter = require('./routes/index');
const cryptoRouter = require('./routes/crypto');
const usersRouter = require('./routes/users');

const compression = require('compression');
const helmet = require('helmet');

const app = express();

// set up mongoose connection
// const dev_db_url = 'mongodb+srv://admin:justscrapeit@scrapes-u34ee.mongodb.net/scrapr-db?retryWrites=true&w=majority';
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const config = require('./config/database');
mongoose.Promise = Promise;
mongoose
  .connect(config.database)
  .then( result => {
    console.log(`Connected to database '${result.connections[0].name}' on ${result.connections[0].host}:${result.connections[0].port}`);
  })
  .catch(err => console.log('There was an error with your connection:', err));

//set template engine
app.engine("hbs", hb);
app.set("view engine", "hbs");

// //// Middleware
app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico'))); // Favicon setup
app.use(logger('dev')); // Morgan middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression()); //Compress all routes

// app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/crypto', cryptoRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
