const user_routes = require('./user');
const upload_routes= require('./upload');
const download_routes = require('./download');

const router = require('express').Router();

router.use('/user', user_routes);
router.use('/file', upload_routes);
router.use('/export', download_routes);

module.exports = router;
