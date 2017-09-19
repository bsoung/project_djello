const { Board, User } = require('../models');

module.exports = {
	index: async (req, res) => {
		try {
			const id = req.query.authorId;

			let params = {
				author: id
			}

			if (!id) {
				params = {};
			}

			const boards = await Board.find(params).populate('members').populate('author');

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
			const board = await Board.findById(id).populate('lists');

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
			const user = await User.findOne({ email: req.body.email });
			const board = await Board.create(req.body.data);

			if (!user.boards.length) {
				user.boards = [board._id];
			  board.members = [user._id];
			} else {
				user.boards.push(board._id);
			  board.members.push(user._id);
			}

			await user.save();
			await board.save();

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

	update: async function(req, res) {
		const id = req.params.id;

		try {
			let board = await Board.findOne({ _id: id });

			if (!board) {
				return res.status(404).json({
					confirmation: 'fail',
					message: "No such User"
				});
			}

			// update our list
			board.lists = req.body.newList;


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
				result: 'Team deleted'
			});

		} catch (e) {
			res.status(500).json({
					confirmation: "fail",
					error: e
				});
		}
	}
};