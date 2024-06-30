const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  date: { type: Date },
  status: { type: String, enum: ['present', 'absent'], required: true },
});

module.exports = mongoose.model('Attendance', attendanceSchema);
