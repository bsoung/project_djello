const { List } = require('../models');

module.exports = {
	index: async (req, res) => {
		try {
			const lists = await List.find();

			return res.json({
				confirmation: 'success',
				result: lists
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
			const list = await List.findById(id);

			return res.json({
				confirmation: 'success',
				result: list
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
			let list = await List.create(req.body);

			return res.json({
				confirmation: 'success',
				message: list
			});
		} catch (e) {
			return res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	}
};