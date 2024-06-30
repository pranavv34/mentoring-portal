const mongoose = require('mongoose')

const marksSchema = new mongoose.Schema({
    rollNo: { type: String, unique: true },
    semesters: [
      {
        semesterNo: Number,
        subjects: [
          {
            subjectName: String,
            marks: {
              midMarks: Number,
              assignmentMarks: Number,
              slipTestMarks: Number,
              
            },
            cgpa:Number,
            sgpa:Number
          },
        ],
      },
    ],
  });

  module.exports = mongoose.model('Marks',marksSchema)