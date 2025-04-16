const express = require("express");
const router = express.Router();
const { RegisterLogininputValidation } = require("../utils/validation");
const { registerController, loginController } = require("../controller/auth.controller");

router.post("/register", RegisterLogininputValidation, registerController);


router.post("/login", RegisterLogininputValidation, loginController);



module.exports = router