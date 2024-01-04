const express = require('express');
const studentRouter = express.Router();
const {record} = require('../controllers/student.controller');

studentRouter.post('/add', record);

module.exports = studentRouter;
