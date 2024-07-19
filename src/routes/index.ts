const user_routes = require('./user');
const upload_routes= require('./upload');
const download_routes = require('./download');

const indexRouter = require('express').Router();

indexRouter.use('/user', user_routes);
indexRouter.use('/file', upload_routes);
indexRouter.use('/export', download_routes);

module.exports = indexRouter;
