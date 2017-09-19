const { Card, List, User } = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {
	index: async (req, res) => {
		try {
			const id = req.query.listId;

			let params = {
				parent: id
			}

			if (!id) {
				params = {};
			}

			const cards = await Card.find(params);

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
			const list = await List.findOne({ _id: req.body.data.parent });
			const card = await Card.create(req.body.data);

			if (!list.cards.length) {
				list.cards = [card._id];
			} else {
				list.cards.push(card._id);
			}

			await list.save();

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
		const id = req.params.id;

		try {
			const decoded = await jwt.verify(req.session.token, process.env.TOKEN_SECRET);
			const user = await User.findById(decoded.id);

			if (!user) {
				return res.json({
					confirmation: 'fail',
					message: e,
					result: null
				});
			}

			console.log(id, 'do we get here')
			await Card.findByIdAndRemove(id);

			const cards = await Card.find();

			return res.json({
				confirmation: 'success',
				message: 'Card deleted',
				result: cards
				
			});

		} catch (e) {
			res.status(500).json({
					confirmation: "fail",
					error: e
				});
		}
	}
};