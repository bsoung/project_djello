const { Card } = require('../models');

module.exports = {
	index: async (req, res) => {
		try {
			const cards = await Card.find();

			return res.json({
				confirmation: 'success',
				result: cards
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
			const card = await Card.findById(id);

			return res.json({
				confirmation: 'success',
				result: card
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
			let card = await Card.create(req.body);

			return res.json({
				confirmation: 'success',
				message: card
			});
		} catch (e) {
			return res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	}
};