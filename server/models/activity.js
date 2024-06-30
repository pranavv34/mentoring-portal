const mongoose = require('mongoose');

const activityPointsSchema = new mongoose.Schema({
  rollNo: { type: Number, unique: true },
  semesters: [
    {
      semesterNo: Number,
      activityPoints: [
        {
          activityName: String,
          points: Number,
        },
      ],
    },
  ],
});

module.exports = mongoose.model('ActivityPoints', activityPointsSchema);
