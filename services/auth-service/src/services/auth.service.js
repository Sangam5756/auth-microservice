const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const { generatedToken } = require("../utils/jwt");


const register = async ({ email, password }) => {
    const existing = await UserModel.findUserByEmail(email);
    if (existing) throw new Error("User already Exists");

    const hash = await bcrypt.hash(password, 10);
    const user = await UserModel.createUser(email, hash)
    return { id: user.id, email: user.email }

}


const login = async ({ email, password }) => {
    const user = await UserModel.findUserByEmail(email);
    if (!user) throw new Error("user not found");
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("invalid credentials");

    const token = generatedToken({ id: user.id })
    return token;
}



module.exports = {login,register}