const { User } = require('../models');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
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

	create: async (req, res, next) => {
		let existingUser;

		try {
			existingUser = await User.findOne({
				email: req.body.email
			});

			if (existingUser) {
				return res.json({
					confirmation: 'fail',
					message: 'User already exists'
				});
			}
		} catch (e) {
			res.json({
				confirmation: 'fail',
				message: e.message
			});
		}

		try {
			let user = await User.create(req.body);

			const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET, {expiresIn: 4000});
			req.session.token = token;

			res.json({
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