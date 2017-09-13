const { Comment } = require('../models');

module.exports = {
	index: async (req, res) => {
		try {
			const comments = await Comment.find();

			res.json({
				confirmation: 'success',
				result: comments
			});
		} catch (e) {
			res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	},

	view: async (req, res) => {
		const id = req.params.id;

		try {
			const comment = await Comment.findById(id);

			res.json({
				confirmation: 'success',
				result: comment
			});
		} catch (e) {
			res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	},

	create: async (req, res, next) => {
		try {
			let comment = await Comment.create(req.body);

			res.json({
				confirmation: 'success',
				message: comment
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
			let comment = await Comment.findOne({ _id: id });

			if (!comment) {
				return res.status(404).json({
					confirmation: 'fail',
					message: "No such User"
				});
			}

			// only supports updating username for now
			comment.username = req.body.username;

			await comment.save();

			res.json({
				confirmation: 'success',
				result: comment
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
			await Comment.findByIdAndRemove(id);

			res.status(204).json({
				confirmation: 'success',
				message: 'Team deleted'
			});

		} catch (e) {
			res.status(500).json({
					confirmation: "fail",
					error: e
				});
		}
	}
};