const { User } = require('../models');
const mongoose = require('mongoose');

module.exports = {
	index: async (req, res) => {
		try {
			const users = await User.find();

			const list = [];
			users.forEach(user => list.push(user.summary()));

			return res.json({
				confirmation: 'success',
				result: list
			})

			
		} catch (e) {
			return res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	},

	view: async (req, res) => {
		const id = req.params.id;

		// var _id = mongoose.Types.ObjectId.fromString(id);

		// console.log(ObjectId.isValid(id), '????')

		try {
			const user = await User.findById(id);

			return res.json({
				confirmation: 'success',
				result: user
			});
		} catch (e) {
			return res.json({
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
			return res.json({
				confirmation: 'fail',
				message: e.message
			});
		}

		try {
			let user = await User.create(req.body);

			return res.json({
				confirmation: 'success',
				message: user
			});
		} catch (e) {
			return res.json({
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

			return res.json({
				confirmation: 'success',
				result: user
			})


		} catch (e) {
			return res.status(500).json({
					confirmation: "fail",
					error: err
				});
		}
	},

	remove: async function(req, res) {
		var id = req.params.id;

		try {
			await User.findByIdAndRemove(id);

		} catch (e) {
			return res.status(500).json({
					confirmation: "fail",
					error: err
				});
		}
		
		return res.status(204).json({
			confirmation: 'success',
			message: 'User deleted'
		});
	}
};