const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullNames: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum:{
            values: ['male', 'female','other'],
        }
    },
})
module.exports = mongoose.model('student', studentSchema);