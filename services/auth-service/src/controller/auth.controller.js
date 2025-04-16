
const AuthService = require("../services/auth.service");



module.exports.registerController = async (req, res) => {
    try {
        const user = await AuthService.register(req.body);
        res.status(201).json({
            success: true,
            message: "registration success",
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
            error: true,
        });
    }
}


module.exports.loginController = async (req, res) => {
    try {
        const user = await AuthService.login(req.body);
        res.status(200).json({
            message: "login success",
            success: true,
            data: user
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
            error: true,
        });
    }
}