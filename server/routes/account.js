var router = require('express').Router();
var controllers = require('../controllers');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const { User } = require('../models');

router.get('/:action', function(req, res, next) {
	var action = req.params.action;
	if (action == 'currentuser') {
		// check the current user
		if (req.session == null) {
			res.json({
				confirmation: 'success',
				user: null
			});

			return;
		}

		if (req.session.token == null) {
			res.json({
				confirmation: 'success',
				user: null
			});

			return;
		}

		// verify token:
		jwt.verify(req.session.token, process.env.TOKEN_SECRET, function(err, decoded) {
			if (err) {

				delete req.session.token;
				// req.session.token.reset();
				
				
				res.json({
					confirmation: 'fail',
					user: null
				});
				
				return;
			}

			controllers.users
				.view(decoded.id, false)
				.then(function(result) {
					res.json({
						confirmation: 'success',
						user: result
					});

					return;
				})
				.catch(function(error) {
					res.json({
						confirmation: 'fail',
						message: error
					});

					return;
				});
		});
	}

	if (action == 'logout') {
		// logout
		req.session.reset();

		res.json({
			confirmation: 'success',
			user: null
		});
	}
});

router.post('/:action', function(req, res, next) {
	var action = req.params.action;

	if (action == 'register') {

		// register
		controllers.users
			.create(req.body)
			.then(function(result) {	
				console.log()

				var token = jwt.sign({id: result.id}, process.env.TOKEN_SECRET, {expiresIn: 4000});
				req.session.token = token;

				res.json({
					confirmation: 'success',
					user: result,
					token: token
				});
			})

			.catch(function(err) {
				res.json({
					confirmation: 'fail',
					message: err
				});
			});
	}

	// TODO: Fix users.index - add another controller method
	if (action == 'login') {
		controllers.users
			.index({email: req.body.email}, true)
			.then(function(results) {
				if (results.length == 0) {
					throw new Error('User not found.');
					return;
				}

				var user = results[0];

				// check password
				var isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
				if (isPasswordCorrect == false) {
					throw new Error('Wrong password.');
					return;
				}

				var token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET, {expiresIn: 4000});
				req.session.token = token;

				res.json({
					confirmation: 'success',
					user: user.summary()
				});

				return;

			})
			.catch(function(err) {
				res.json({
					confirmation: 'fail',
					message: err.message
				});
			})

	}

});

module.exports = router;
