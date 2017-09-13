const router = require('express').Router();
const { User } = require('../models');

const createTestUser = async (req, res, next) => {
	const params = {
		username: 'billy',
		password: 'bob',
		email: 'billbob@gmail.com'
	}

	try {
		let user = await User.create(params);
		res.json({
			confirmation: 'success',
			result: user
		})

	} catch (e) {
		res.json({
					confirmation: 'fail',
					result: e.stack
				})
	}
}

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/testuser', createTestUser);

module.exports = router;
