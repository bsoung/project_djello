const { Team } = require('../models');

module.exports = {
	index: async (req, res) => {
		try {
			const teams = await Team.find();

			res.json({
				confirmation: 'success',
				result: teams
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
			const team = await Team.findById(id);

			res.json({
				confirmation: 'success',
				result: team
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
			let team = await Team.create(req.body);

			res.json({
				confirmation: 'success',
				message: team
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
			let team = await Team.findOne({ _id: id });

			if (!team) {
				return res.status(404).json({
					confirmation: 'fail',
					message: "No such User"
				});
			}

			// only supports updating username for now
			team.username = req.body.username;

			await team.save();

			res.json({
				confirmation: 'success',
				result: team
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
			await Team.findByIdAndRemove(id);

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