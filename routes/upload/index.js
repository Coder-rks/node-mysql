const router = require('express').Router();
const uploadController = require('../../controllers/upload');

router.post('/upload', uploadController.upload);

module.exports = router;