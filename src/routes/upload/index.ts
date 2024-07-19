const uploadRouter = require('express').Router();
const uploadController = require('../../controllers/upload');

uploadRouter.post('/upload', uploadController.upload);

module.exports = uploadRouter;