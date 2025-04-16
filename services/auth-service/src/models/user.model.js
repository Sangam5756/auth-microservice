// src/models/user.model.js
const prisma = require('../config/prisma');

const createUser = async (email, passwordHash) => {
  return await prisma.user.create({
    data: {
      email,
      password: passwordHash,
    },
  });
};

const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

module.exports = { createUser, findUserByEmail };
