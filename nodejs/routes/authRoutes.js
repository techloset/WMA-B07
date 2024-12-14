var express = require('express');
const { doSignup, doLogin } = require('../controllers/authController');

var authRouter = express.Router();


authRouter.post('/signup', doSignup);
authRouter.post('/login', doLogin );

module.exports = authRouter;