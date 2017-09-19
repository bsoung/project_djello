const { Card, List } = require('../models');

module.exports = {
	index: async (req, res) => {
		try {
			const cards = await Card.find();

			res.json({
				confirmation: 'success',
				result: cards
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
			const card = await Card.findById(id);

			res.json({
				confirmation: 'success',
				result: card
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
			const list = await List.findOne({ _id: req.body.data.currentListId });
			const card = await Card.create(req.body.data);

			if (!list.cards.length) {
				list.cards = [card._id];
			} else {
				list.cards.push(card._id);
			}

			await list.save();

			res.json({
				confirmation: 'success',
				message: card
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
			let card = await Card.findOne({ _id: id });

			if (!card) {
				return res.status(404).json({
					confirmation: 'fail',
					message: "No such User"
				});
			}

			// only supports updating username for now
			card.username = req.body.username;

			await card.save();

			res.json({
				confirmation: 'success',
				result: card
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
			await Card.findByIdAndRemove(id);

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