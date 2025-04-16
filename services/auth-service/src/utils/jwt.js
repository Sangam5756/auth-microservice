const jwt = require("jsonwebtoken")
const secret = process.env.JWTSECRET || "thisissecret"

const generatedToken = (payload) => jwt.sign(payload, secret, { expiresIn: "1d" });
const verifyToken = (payload) => jwt.verify(payload, secret)

module.exports = { generatedToken, verifyToken }