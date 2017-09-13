const router = require('express').Router();
const controllers = require('../controllers');

router.get('/:resource', (req, res, next) => {
	const resource = req.params.resource;
	const controller = controllers[resource];

	if (controller == null) {
		return res.json({
			confirmation: 'fail',
			resource: 'invalid resource'
		});
	}

	controller.index(req, res, next);
});

router.get('/:resource/:id', (req, res, next) => {
	const resource = req.params.resource;
	const controller = controllers[resource];

	if (controller == null) {
		return res.json({
			confirmation: 'fail',
			resource: 'invalid resource'
		});
	}

	controller.view(req, res, next);
});

router.post('/:resource', (req, res, next) => {
	const resource = req.params.resource;
	const controller = controllers[resource];

	if (controller == null) {
		return res.json({
			confirmation: 'fail',
			resource: 'invalid resource'
		});
	}

	controller.create(req, res, next);
});

module.exports = router;