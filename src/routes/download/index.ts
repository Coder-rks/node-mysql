const downloadRouter = require('express').Router();
const downloadController = require('../../controllers/download')

downloadRouter.get('/download', downloadController.download)

module.exports = downloadRouter;