const { Board } = require('../models');

module.exports = {
	index: async (req, res) => {
		try {
			const boards = await Board.find();

			return res.json({
				confirmation: 'success',
				result: boards
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
			const board = await Board.findById(id);

			return res.json({
				confirmation: 'success',
				result: board
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
			let board = await Board.create(req.body);

			return res.json({
				confirmation: 'success',
				message: board
			});
		} catch (e) {
			return res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	}
};