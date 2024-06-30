const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Subject = require('../models/subjects');
const Student = require('../models/student');
const Attendance = require('../models/attendance');

// Add attendance for a student in a subject
router.post('/add-attendance/:rollno', async (req, res) => {
    const rollno = req.params.rollno;
    const { subjectCode, status, date } = req.body;

    try {
        // Find the student by roll number
        const student = await Student.findOne({ halltktno: rollno });

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Find the subject by subject code
        const subject = await Subject.findOne({ subcode: subjectCode });

        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' });
        }

        // Create attendance record with the specified date
        const attendance = await Attendance.create({
            student: student._id,
            subject: subject._id,
            status,
            date,
        });

        res.status(201).json({ message: 'Attendance added successfully', data: attendance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get subject-wise attendance for a specific student
router.get('/:hallTicketNumber', async (req, res) => {
  const hallTicketNumber = req.params.hallTicketNumber;
  console.log(hallTicketNumber)
  try {
    // Find the student by roll number
    const student = await Student.findOne({ halltktno: hallTicketNumber });
    console.log(student)
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Get subject-wise attendance records for the student
    const subjectWiseAttendance = await Attendance.aggregate([
      {
        $match: {
          student: student._id,
        },
      },
      {
        $lookup: {
          from: 'subjects',
          localField: 'subject',
          foreignField: '_id',
          as: 'subjectDetails',
        },
      },
      {
        $unwind: '$subjectDetails',
      },
      {
        $group: {
          _id: '$subjectDetails',
          totalAttendance: { $sum: { $cond: { if: { $eq: ['$status', 'present'] }, then: 1, else: 0 } } },
          totalClasses: { $sum: 1 }, // Count all classes
        },
      },
      {
        $project: {
          _id: 0,
          subname: '$_id.subname',
          subcode: '$_id.subcode',
          totalAttendance: 1,
          totalClasses: 1,
        },
      },
    ]);
    // console.log(subjectWiseAttendance)
    res.status(200).json({ message: 'Success', data: subjectWiseAttendance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get subject-wise attendance for a specific student
// router.get('/:email', async (req, res) => {
//   const email = req.params.email;
//   // console.log(email)

//   try {
//     // Find the student by roll number
//     const student = await Student.findOne({ email:email });
//     console.log(student)
//     if (!student) {
//       return res.status(404).json({ message: 'Student not found' });
//     }

//     // Get subject-wise attendance records for the student
//     const subjectWiseAttendance = await Attendance.aggregate([
//       {
//         $match: {
//           student: student._id,
//         },
//       },
//       {
//         $lookup: {
//           from: 'subjects',
//           localField: 'subject',
//           foreignField: '_id',
//           as: 'subjectDetails',
//         },
//       },
//       {
//         $unwind: '$subjectDetails',
//       },
//       {
//         $group: {
//           _id: '$subjectDetails',
//           totalAttendance: { $sum: { $cond: { if: { $eq: ['$status', 'present'] }, then: 1, else: 0 } } },
//           totalClasses: { $sum: 1 }, // Count all classes
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           subname: '$_id.subname',
//           subcode: '$_id.subcode',
//           totalAttendance: 1,
//           totalClasses: 1,
//           percentage: {
 //          $round:{
//             $multiply: [
//               { $divide: ['$totalAttendance', '$totalClasses'] },
//               100,
//             ],
//             },
//           },
//         },
//       },
//     ]);
//     console.log(subjectWiseAttendance)
//     res.status(200).json({ message: 'Success', data: subjectWiseAttendance });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// Calculate overall attendance for a specific student
// router.get('/overallattendance/:hallTicketNumber', async (req, res) => {
//   const hallTicketNumber = req.params.hallTicketNumber;

//   try {
//     // Find the student by roll number
//     const student = await Student.findOne({ halltktno: hallTicketNumber });

//     if (!student) {
//       return res.status(404).json({ message: 'Student not found' });
//     }

//     // Get overall attendance records for the student
//     const overallAttendance = await Attendance.aggregate([
//       {
//         $match: {
//           student: student._id,
//         },
//       },
//       {
//         $group: {
//           _id: null,
//           totalAttendance: { $sum: { $cond: { if: { $eq: ['$status', 'present'] }, then: 1, else: 0 } } },
//           totalClasses: { $sum: 1 }, // Count all classes
//         },
//       },
//       {
//         $project: {
//                     _id: 0,
//                     subname: '$_id.subname',
//                     subcode: '$_id.subcode',
//                     totalAttendance: 1,
//                     totalClasses: 1,
//                     percentage: {
//                     $round:{
//                       $multiply: [
//                         { $divide: ['$totalAttendance', '$totalClasses'] },
//                         100,
//                       ],
//                       },
//                     },
//                   },
//       },
//     ]);

//     if (overallAttendance.length === 0) {
//       return res.status(404).json({ message: 'No attendance records found for the student' });
//     }

//     res.status(200).json({ message: 'Success yesss', data: overallAttendance[0].overallAttendance });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get('/overallattendance/:hallTicketNumber', async (req, res) => {
  const hallTicketNumber = req.params.hallTicketNumber;

  try {
    const student = await Student.findOne({ halltktno: hallTicketNumber });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const overallAttendance = await Attendance.aggregate([
      {
        $match: {
          student: student._id,
        },
      },
      {
        $group: {
          _id: null,
          totalAttendance: { $sum: { $cond: { if: { $eq: ['$status', 'present'] }, then: 1, else: 0 } } },
          totalClasses: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          overallAttendance: {
            $round: {
              $multiply: [
                { $divide: ['$totalAttendance', '$totalClasses'] },
                100,
              ],
            },
          },
        },
      },
    ]);

    if (overallAttendance.length === 0) {
      return res.status(404).json({ message: 'No attendance records found for the student' });
    }

    res.status(200).json({ message: 'Success', data: overallAttendance[0].overallAttendance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Calculate overall attendance for a specific student
// router.get('/overallattendance/:email', async (req, res) => {
//   const email = req.params.email;
//   console.log(email)

//   try {
//     // Find the student by roll number
//     const student = await Student.findOne({ email:email });

//     if (!student) {
//       return res.status(404).json({ message: 'Student not found' });
//     }

//     // Get overall attendance records for the student
//     const overallAttendance = await Attendance.aggregate([
//       {
//         $match: {
//           student: student._id,
//         },
//       },
//       {
//         $group: {
//           _id: null,
//           totalAttendance: { $sum: { $cond: { if: { $eq: ['$status', 'present'] }, then: 1, else: 0 } } },
//           totalClasses: { $sum: 1 }, // Count all classes
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           overallAttendance: {
//             $multiply: [
//               { $divide: ['$totalAttendance', '$totalClasses'] },
//               100,
//             ],
//           },
//         },
//       },
//     ]);

//     if (overallAttendance.length === 0) {
//       return res.status(404).json({ message: 'No attendance records found for the student' });
//     }

//     res.status(200).json({ message: 'Success', data: overallAttendance[0].overallAttendance });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });



module.exports = router;