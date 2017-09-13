const { Team } = require('../models');

module.exports = {
	index: async (req, res) => {
		try {
			const teams = await Team.find();

			return res.json({
				confirmation: 'success',
				result: teams
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
			const team = await Team.findById(id);

			return res.json({
				confirmation: 'success',
				result: team
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
			let team = await Team.create(req.body);

			return res.json({
				confirmation: 'success',
				message: team
			});
		} catch (e) {
			return res.json({
				confirmation: 'fail',
				message: e.message
			});
		}
	}
};