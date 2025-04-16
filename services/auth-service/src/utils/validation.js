const { body, validationResult } = require("express-validator")


const RegisterLogininputValidation = [
    body('email')
        .trim()
        .isEmail()
        .withMessage("Invalid email address")
        .normalizeEmail(),

    body('password')
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next()
    }
]


module.exports = {RegisterLogininputValidation}