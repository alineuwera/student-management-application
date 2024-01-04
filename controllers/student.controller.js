const StudentModel = require('../models/student.models');

const record = async (req, res, next) => {
    try {
        var newtudent = new StudentModel(req.body);
        var recordedStudent = await newtudent.save();
        
        // var newStudent2 = await StudentModel.create(req.body);
    
        res.status(201).json({
            message: 'Student saved successfully',
            student: recordedStudent
        });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    record
};