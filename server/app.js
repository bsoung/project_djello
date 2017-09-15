const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const Promise = require('bluebird');

const app = express();
require('dotenv').config();

mongoose.Promise = Promise;

// session
app.use(
	session({
		cookie: { maxAge: 60000 },
		secret: 'woot',
		resave: false,
		saveUninitialized: false
	})
);



// connect to mongoose
const beginConnection = mongoose.connect(process.env.DB_URI, {
	useMongoClient: true
});

beginConnection
	.then(db => {
		console.log('DB CONNECTION SUCCESS');
	})
	.catch(err => {
		console.error(err);
	});

// view engine setup
app.engine(
	'handlebars',
	exphbs({
		defaultLayout: 'main'
	})
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));
app.use('/account', require('./routes/account'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
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
