const { User } = require('../models');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const EmailService = require('../services/email');
const bcrypt = require('bcrypt');

module.exports = {
	index: async (req, res, next, isRaw) => {
		try {
			const users = await User.find();

			const list = [];
			users.forEach(user => list.push(user.summary()));

			res.json({
				confirmation: 'success',
				result: isRaw ? users : list
			})

		} catch (e) {
			res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	},

	view: async (req, res, next, isRaw) => {
		const id = req.params.id;

		try {
			const user = await User.findById(id);

			res.json({
				confirmation: 'success',
				result: isRaw ? user : user.summary()
			});
		} catch (e) {
			res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	},

	get: async (req, res, next) => {
		if (!req.session) {
			return res.json({
				confirmation: 'success',
				result: null
			});
		}

		if (!req.session.token) {
			return res.json({
				confirmation: 'success',
				result: null
			});
		}

		try {
			const decoded = await jwt.verify(req.session.token, process.env.TOKEN_SECRET);
			const user = await User.findById(decoded.id);

			return res.json({
				confirmation: 'success',
				result: user.summary()
			});

		} catch (e) {
			req.session.destroy();
			
			return res.json({
					confirmation: 'fail',
					message: e,
					result: null
				});
		}
	},

	logout: async (req, res, next) => {
		req.session.destroy();

		return res.json({
			confirmation: 'success',
			result: null
		});
	},

	login: async (req, res, next) => {
		try {
			const results = await User.find({email: req.body.email});

			if (results.length == 0) {
				throw new Error('User not found.');
			}

			const user = results[0];
			const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);

			if (isPasswordCorrect == false) {
				throw new Error('Wrong password.');
				return;
			}

			const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET, {expiresIn: '1d'});
			req.session.token = token;

			return res.json({
				confirmation: 'success',
				result: user.summary(),
				token: token
			});

		} catch (e) {
			return res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	},

	create: async (req, res, next) => {

		try {
			const existingUser = await User.findOne({
				email: req.body.email
			});

			if (existingUser) {
				return res.json({
					confirmation: 'fail',
					message: 'User already exists'
				});
			}

			const hash = await bcrypt.hashSync(req.body.password, 12);
			req.body.password = hash;

			console.log(req.body, 'saved info')

			const user = await User.create(req.body);

			const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET, {expiresIn: '1d'});
			req.session.token = token;

			/*
				Send out email confirming account created
			 */

			const options = {
				from: process.env.EMAIL_USER,
				to: req.body.email,
				subject: 'Welcome to Djello!',
				text: `Welcome to the site! Here is a record of your account information. Username: ${req
					.body.username}. Email: ${req.body.email}. Password: ${req
					.body.password}. Please keep these in a safe spot for reference.`,
				html: `<div><h4>Welcome to the site! Here is a record of your account information:</h4><ul><li>Username: ${req
					.body.username}</li><li>Email: ${req.body
					.email}</li><li>Password: ${req.body.password}</li></ul><div>Please keep these in a safe spot for reference.</div></div>`
			};

			await EmailService.send(options);

			return res.json({
				confirmation: 'success',
				result: user.summary(),
				token: token
			});

		} catch (e) {
			res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	},

	update: async function(req, res) {
		var id = req.params.id;

		try {
			let user = await User.findOne({ _id: id });

			if (!user) {
				return res.status(404).json({
					confirmation: 'fail',
					message: "No such User"
				});
			}

			// only supports updating username for now
			user.username = req.body.username;

			await user.save();

			res.json({
				confirmation: 'success',
				result: user
			})


		} catch (e) {
			res.status(500).json({
					confirmation: "fail",
					error: e
				});
		}
	},

	remove: async function(req, res) {
		var id = req.params.id;

		try {
			await User.findByIdAndRemove(id);

			res.status(204).json({
				confirmation: 'success',
				message: 'User deleted'
			});

		} catch (e) {
			res.status(500).json({
					confirmation: "fail",
					error: e
				});
		}
	}
};