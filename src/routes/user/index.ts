const userRouter = require('express').Router();
const userController = require('../../controllers/user');
const authMiddleware = require('../../middlewares/authenticate');

userRouter.post('/signup', authMiddleware.authenticateSignup, userController.signup);

userRouter.post('/signin', authMiddleware.authenticateSignIn, userController.signin);

module.exports = userRouter;