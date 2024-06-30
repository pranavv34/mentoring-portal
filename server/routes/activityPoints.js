// const express = require('express')
// const router = express.Router()
// const multer = require('multer');
// const cloudinary = require('cloudinary').v2;

// const Certificate = require('../models/certificates')



// cloudinary.config({
//     cloudinary_url: 'cloudinary://624756742514515:U8NG5qbPMf5Oq_wodSD4-zzg1S4@dbh6ctgel',
//   });

// const upload = multer({});

// router.post('/upload-certificate', upload.single('certificate'), async (req, res) => {
//     const { rollno, category } = req.body;
//     const certificateFile = req.file;
//     console.log(certificateFile)
  
//     try {
//       const result = await cloudinary.uploader.upload(certificateFile.path, {
//         resource_type: 'raw',
//       });
  
//       const certificateUrl = result.secure_url;
  
//       const certificate = new Certificate({ rollno, category, certificateUrl });
//       certificate.save((err) => {
//         if (err) {
//           console.error(err);
//           res.status(500).send('Internal Server Error');
//         } else {
//         console.log('Success')
//         }
//       });
//     } catch (error) {
//       console.error('Error uploading certificate', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });

  

// module.exports = router

const express = require('express');
const ActivityPoints = require('../models/activity');

const router = express.Router();

// Route to add activity points for a given semester and activity
// router.post('/addActivityPoints', async (req, res) => {
//   const { rollNo, semesterNo, activityName, points } = req.body;

//   if (!rollNo || !semesterNo || !activityName || isNaN(points)) {
//     return res.status(400).json({ error: 'Invalid input' });
//   }

//   try {
//     let studentMarks = await ActivityPoints.findOne({ rollNo });

//     if (!studentMarks) {
//       studentMarks = new ActivityPoints({ rollNo });
//     }

//     // Find the index of the semester in the semesters array
//     const semesterIndex = studentMarks.semesters.findIndex((entry) => entry.semesterNo === semesterNo);

//     if (semesterIndex !== -1) {
//       // If semester exists, find the index of the activity in the activityPoints array
//       const activityIndex = studentMarks.semesters[semesterIndex].activityPoints.findIndex(
//         (activity) => activity.activityName === activityName
//       );

//       if (activityIndex !== -1) {
//         // If activity exists, update points
//         studentMarks.semesters[semesterIndex].activityPoints[activityIndex].points = points;
//       } else {
//         // If activity doesn't exist, add a new entry
//         studentMarks.semesters[semesterIndex].activityPoints.push({ activityName, points });
//       }
//     } else {
//       // If semester doesn't exist, add a new entry for the semester with the activity
//       studentMarks.semesters.push({
//         semesterNo,
//         activityPoints: [{ activityName, points }],
//       });
//     }

//     await studentMarks.save();

//     res.status(200).json({ message: 'Activity points added successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Route to get all activity points for a student

router.post('/addActivityPoints', async (req, res) => {
  const { rollNo, semesterNo, activityPoints } = req.body;

  if (!rollNo || !semesterNo || !activityPoints || !Array.isArray(activityPoints)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  try {
    let studentMarks = await ActivityPoints.findOne({ rollNo });

    if (!studentMarks) {
      studentMarks = new ActivityPoints({ rollNo });
    }

    const semesterIndex = studentMarks.semesters.findIndex((entry) => entry.semesterNo === semesterNo);

    if (semesterIndex !== -1) {
      activityPoints.forEach(({ activityName, points }) => {
        const activityIndex = studentMarks.semesters[semesterIndex].activityPoints.findIndex(
          (activity) => activity.activityName === activityName
        );

        if (activityIndex !== -1) {
          studentMarks.semesters[semesterIndex].activityPoints[activityIndex].points = points;
        } else {
          studentMarks.semesters[semesterIndex].activityPoints.push({ activityName, points });
        }
      });
    } else {
      studentMarks.semesters.push({
        semesterNo,
        activityPoints: activityPoints.map(({ activityName, points }) => ({ activityName, points })),
      });
    }

    await studentMarks.save();

    res.status(200).json({ message: 'Activity points added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// router.get('/getAllActivityPoints/:rollNo', async (req, res) => {
//   const rollNo = req.params.rollNo;

//   try {
//     const studentMarks = await ActivityPoints.findOne({ rollNo }, 'rollNo semesters');

//     if (!studentMarks) {
//       return res.status(404).json({ error: 'Student not found' });
//     }

//     res.status(200).json(studentMarks);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Route to get activity points for a specific semester for a student

router.get('/getAllActivityPoints/:rollNo', async (req, res) => {
  const rollNo = req.params.rollNo;
  const semesterNo = req.query.semesterNo;

  try {
    const studentMarks = await ActivityPoints.findOne({ rollNo }, 'rollNo semesters');

    if (!studentMarks) {
      return res.status(404).json({ error: 'Student not found' });
    }

    if (semesterNo) {
      // If semesterNo is provided, filter activity points for that semester
      const semesterData = studentMarks.semesters.find((semester) => semester.semesterNo == semesterNo);

      if (!semesterData) {
        return res.status(404).json({ error: 'Semester not found for the student' });
      }

      return res.status(200).json(semesterData.activityPoints);
    } else {
      // If semesterNo is not provided, return all activity points for the student
      return res.status(200).json(studentMarks);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// router.get('/getSemwiseActivityPoints/:rollNo', async (req, res) => {
//   const rollNo = req.params.rollNo;
//   const semesterNo = req.query.semesterNo;

//   if (!semesterNo || isNaN(semesterNo)) {
//     return res.status(400).json({ error: 'Invalid semester number' });
//   }

//   try {
//     const studentMarks = await ActivityPoints.findOne({ rollNo }, 'rollNo semesters');

//     if (!studentMarks) {
//       return res.status(404).json({ error: 'Student not found' });
//     }

//     const semesterData = studentMarks.semesters.find((semester) => semester.semesterNo == semesterNo);

//     if (!semesterData) {
//       return res.status(404).json({ error: 'Semester not found for the student' });
//     }

//     res.status(200).json(semesterData.activityPoints);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// router.get('/getSemwiseActivityPoints/:rollNo', async (req, res) => {
//   const rollNo = req.params.rollNo;
//   const semesterNos = req.query.semesters;

//   if (!semesterNos || !Array.isArray(semesterNos) || semesterNos.length === 0) {
//     return res.status(400).json({ error: 'Invalid semester numbers' });
//   }

//   try {
//     const studentMarks = await ActivityPoints.findOne({ rollNo }, 'rollNo semesters');

//     if (!studentMarks) {
//       return res.status(404).json({ error: 'Student not found' });
//     }

//     const semestersData = studentMarks.semesters.filter((semester) => semesterNos.includes(semester.semesterNo.toString()));

//     if (semestersData.length === 0) {
//       return res.status(404).json({ error: 'No matching semesters found for the student' });
//     }

//     // If you want to return activity points for all semesters as an object
//     const semestersActivityPoints = {};
//     semestersData.forEach((semesterData) => {
//       semestersActivityPoints[semesterData.semesterNo] = semesterData.activityPoints;
//     });

//     res.status(200).json(semestersActivityPoints);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

router.get('/getSemwiseActivityPoints/:rollNo/:semesterNo', async (req, res) => {
  const rollNo = req.params.rollNo;
  const semesterNo = req.params.semesterNo;

  if (!semesterNo || isNaN(semesterNo)) {
    return res.status(400).json({ error: 'Invalid semester number' });
  }

  try {
    const studentMarks = await ActivityPoints.findOne({ rollNo }, 'rollNo semesters');

    if (!studentMarks) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const semesterData = studentMarks.semesters.find((semester) => semester.semesterNo == semesterNo);

    if (!semesterData) {
      return res.status(404).json({ error: 'Semester not found for the student' });
    }

    res.status(200).json(semesterData.activityPoints);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/getTotalPoints/:rollNo/:semesterNo', async (req, res) => {
  const rollNo = req.params.rollNo;
  const semesterNo = req.params.semesterNo;

  if (!semesterNo || isNaN(semesterNo)) {
    return res.status(400).json({ error: 'Invalid semester number' });
  }

  try {
    const studentMarks = await ActivityPoints.findOne({ rollNo }, 'rollNo semesters');

    if (!studentMarks) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const semesterData = studentMarks.semesters.find((semester) => semester.semesterNo == semesterNo);

    if (!semesterData) {
      return res.status(404).json({ error: 'Semester not found for the student' });
    }

    const totalPoints = semesterData.activityPoints.reduce((sum, activity) => sum + activity.points, 0);

    res.status(200).json({ semesterNo, totalPoints });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;