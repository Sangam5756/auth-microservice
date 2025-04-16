const { PrismaClient } = require('../generated/prisma/');  // Adjust the path to the generated client
const prisma = new PrismaClient();


module.exports = prisma
