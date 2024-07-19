const userRouter = require('express').Router();
const userController = require('../../controllers/user');

userRouter.post('/signup', userController.signup);

userRouter.post('/signin', userController.signin);

module.exports = userRouter;