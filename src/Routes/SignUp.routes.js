const express = require("express");
const router = express.Router()
const signupController = require('../Controllers/signup.controller');

router.post("/signUp", signupController.signUp)
router.get("/getSignUp", signupController.getSignup)
router.post("/login", signupController.login)

module.exports = router
