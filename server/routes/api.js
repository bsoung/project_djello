const router = require('express').Router();
const controllers = require('../controllers');

/*
	GENERIC RESOURCE ROUTES
 */

router.get('/:resource', (req, res, next) => {
	const resource = req.params.resource;
	const controller = controllers[resource];

	if (controller == null) {
		return res.json({
			confirmation: 'fail',
			resource: 'invalid resource'
		});
	}

	controller.index(req, res, next, false);
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

	controller.view(req, res, next, false);
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

// router.post('/:resource/update', (req, res, next) => {
// 	const resource = req.params.resource;
// 	const controller = controllers[resource];

// 	if (controller == null) {
// 		return res.json({
// 			confirmation: 'fail',
// 			resource: 'invalid resource'
// 		});
// 	}

// 	controller.update(req, res, next);
// });

router.post('/:resource/update/:id', (req, res, next) => {
	const resource = req.params.resource;
	const controller = controllers[resource];

	if (controller == null) {
		return res.json({
			confirmation: 'fail',
			resource: 'invalid resource'
		});
	}

	controller.update(req, res, next);
});


module.exports = router;