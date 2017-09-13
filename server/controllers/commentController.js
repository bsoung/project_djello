const { Comment } = require('../models');

module.exports = {
	index: async (req, res) => {
		try {
			const comments = await Comment.find();

			return res.json({
				confirmation: 'success',
				result: comments
			});
		} catch (e) {
			return res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	},

	view: async (req, res) => {
		const id = req.params.id;

		try {
			const comment = await Comment.findById(id);

			return res.json({
				confirmation: 'success',
				result: comment
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
			existingUser = await Comment.findOne({
				email: req.body.email
			});

			if (existingUser) {
				return res.redirect('/');
			}
		} catch (e) {
			return res.json({
				confirmation: 'fail',
				message: e.message
			});
		}

		try {
			let comment = await Comment.create(req.body);

			return res.json({
				confirmation: 'success',
				message: comment
			});
		} catch (e) {
			return res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	}
};