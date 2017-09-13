const { Board } = require('../models');

module.exports = {
	index: async (req, res) => {
		try {
			const boards = await Board.find();

			res.json({
				confirmation: 'success',
				result: boards
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
			const board = await Board.findById(id);

			res.json({
				confirmation: 'success',
				result: board
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
			let board = await Board.create(req.body);

			res.json({
				confirmation: 'success',
				message: board
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
			let board = await Board.findOne({ _id: id });

			if (!board) {
				return res.status(404).json({
					confirmation: 'fail',
					message: "No such User"
				});
			}

			// only supports updating username for now
			board.username = req.body.username;

			await board.save();

			res.json({
				confirmation: 'success',
				result: board
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
			await Board.findByIdAndRemove(id);

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