const express = require('express');
const allRoutes = express();

const studentRouter = require('./student.routes');
allRoutes.use('/student', studentRouter);

module.exports = allRoutes;