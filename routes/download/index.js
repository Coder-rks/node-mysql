const router = require('express').Router();
const downloadController = require('../../controllers/download')

router.get('/download', downloadController.download)

module.exports = router;