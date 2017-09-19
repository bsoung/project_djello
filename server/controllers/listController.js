const { List, Board } = require('../models');

module.exports = {
	index: async (req, res) => {
		try {
			const id = req.query.boardId;

			console.log(id, 'id??')

			let params = {
				parent: id
			}

			if (!id) {
				params = {};
			}

			const lists = await List.find(params).populate('cards').populate('author');

			console.log(lists, 'what do we get??')

			res.json({
				confirmation: 'success',
				result: lists
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
			const list = await List.findById(id);

			res.json({
				confirmation: 'success',
				result: list
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
			const board = await Board.findOne({ _id: req.body.boardId });
			const list = await List.create(req.body.data);

			if (!board.lists.length) {
				board.lists = [list._id];
			} else {
				board.lists.push(list._id);
			}

			await board.save();

			res.json({
				confirmation: 'success',
				result: list
			});
		} catch (e) {
			res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	},

	update: async function(req, res) {
		const id = req.params.id;

		try {
			const list = await List.findOne({ _id: id });

			if (!list) {
				return res.status(404).json({
					confirmation: 'fail',
					message: "No such User"
				});
			}

			// only supports updating username for now
			list.username = req.body.username;

			await list.save();

			res.json({
				confirmation: 'success',
				result: list
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
			await List.findByIdAndRemove(id);

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