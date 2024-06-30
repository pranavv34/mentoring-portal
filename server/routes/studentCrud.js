const mongoose = require('mongoose');
const express = require('express');
const Student = require('../models/student')
const bcrypt = require('bcryptjs')
const router = express.Router()

const fs = require('fs');
const PDFDocument = require('pdfkit');
const PDFTable = require('pdfkit-table');
const Marks = require('../models/marksSchema')

const salt = 12;


// Register
// router.post('/register', async (req, res, next) => {
//   // const { halltktno, password, ...otherData } = req.body;
//   const std = {
//     name: req.body.name,
//     branch: req.body.branch,
//     halltktno: req.body.halltktno,
//     contactno: req.body.contactno,
//     altcontactno: req.body.altcontactno,
//     email: req.body.email,
//     category: req.body.category,
//     password: req.body.password,
//     tenmarks: req.body.tenmarks,
//     twemarks: req.body.twemarks,
//     fname: req.body.fname,
//     occ:req.body.occ,
//     mname: req.body.mname,
//     pcontact: req.body.pcontact,
//     altpcontact: req.body.altpcontact,
//     pemail: req.body.pemail
//   }
//   try {
//       const hash = await bcrypt.hash(std.password, salt);
//       std.password = hash;
//       const user = new Student(std);
//       await user.save();
//       res.status(201).json({ user });
//   } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

router.post('/register', async (req, res, next) => {
  
  const  studentName=req.body.studentName
  const  branchSection=req.body.branchSection
  const  hallTicketNumber=req.body.hallTicketNumber
  const  contactPhone=req.body.contactPhone
  const  section=req.body.section
  const  email=req.body.email
  const  category=req.body.category
  const  password=req.body.password
  const  marks10th=req.body.marks10th
  const  marks12th=req.body.marks12th
  const  fatherName=req.body.fatherName
  const  fatherOccupation=req.body.fatherOccupation
  const  motherName=req.body.motherName
  const  parentContact=req.body.parentContact
  const  parentAltContact=req.body.parentAltContact
   const parentEmail=req.body.parentEmail
  

   
   const hashedPassword =await bcrypt.hash(password, salt);

   const userexists = await Student.findOne({name:studentName})
    const userexists1 = await Student.findOne({email:email})
    const userexists2 = await Student.findOne({halltktno:hallTicketNumber})
    if (userexists==null && userexists1==null && userexists2==null){
   
   try {
     if (
       !studentName ||
       !branchSection ||
       !hallTicketNumber ||
       !contactPhone ||
       !section ||
       !email ||
       !category ||
       !password ||
       !marks10th ||
       !marks12th ||
       !fatherName ||
       !fatherOccupation ||
       !motherName ||
       !parentContact ||
       !parentAltContact ||
       !parentEmail
     ) {
       throw new Error('Invalid data');
     }
   const studentData = new Student({
      name:studentName,
      branch: branchSection,
      halltktno: hallTicketNumber,
      password:hashedPassword,
      category,
      contactno: contactPhone,
      section: section,
      email,
      fname: fatherName,
      occ: fatherOccupation,
      mname: motherName,
      pcontact: parentContact,
      altpcontact: parentAltContact,
      pemail: parentEmail,
      marks10th,
      marks12th,
    });

    await studentData.save();

    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }}else{
    res.send({code:400,message:"user already exists"})

  }
});


// const userexists = await Student.findOne({hallTicketNumber:hallTicketNumber})
// const userexists1 = await Student.findOne({password:password})
// if(userexists!=null || userexists1!=null){
  // if (userexists){
    //     if (userexists.password !== password){
      //         return res.send({code:400,message:"username or password wrong"})
      //     }
      //     console.log(userexists);
      //         const _token = jwt.sign({...userexists},'PRIV_123')
      //         if(userexists.userType=="Admin"){
        //         return res.send({code:200,message:"Admin login success",token:_token,user_type:userexists.type,username:userexists});
        //         }else{
    //             return res.send({code:200,message:"User login success",token:_token,user_type:userexists.type,username:userexists});
    //         }
    // }else{
      //     return res.send({code:500,message:"service error"})
      // }}
      // else{
        //     return res.send({code:400,message:"invalid username or password"})
        // }
        // const { halltktno, password } = req.body;


 // Login
 router.post('/login', async (req, res, next) => {
          const hallTicketNumber = req.body.hallTicketNumber
          const password = req.body.password
          // console.log(hallTicketNumber,password)
          
        let user;
        try {
          user = await Student.findOne({halltktno : hallTicketNumber });
          // console.log(user)
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }

  if (user) {
      let result;
      let rrr;
      try {
          result = await bcrypt.compare(password, user.password);
          // console.log(result)
      } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Internal Server Error' });
      }

      if (result || user.password===password) {
          return res.status(200).json({ message: 'Logged in successfully!!',data:hallTicketNumber });
      }
      return res.status(404).json({ message: 'Invalid credentials' });
  }
  return res.status(404).json({ message: 'User not found' });
});

// Find all users
router.post('/findall', async (req, res, next) => {
  try {
      const users = await Student.find();
      if (users.length > 0) {
          return res.status(200).json({ users });
      }
      return res.status(404).json({ message: 'No users found!!' });
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Find user by ID
router.post('/findbyid/:id', async (req, res, next) => {
  const halltktno = req.params.id;
  try {
      const user = await Student.findOne({halltktno});
      if (user) {
          return res.status(200).json({ user });
      }
      return res.status(404).json({ message: 'User not found' });
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete User
router.post('/delete/:id', async (req, res, next) => {
  const halltktno = req.params.id;
  try {
      // const user = await Student.findByIdAndDelete({ _id: halltktno });
      const user = await Student.findOneAndDelete({ halltktno });
      if (user) {
          return res.status(200).json({ message: 'User has been deleted successfully!!!' });
      }
      return res.status(404).json({ message: 'Couldn\'t delete the user' });
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});



router.get('/marks/:hallTicketNumber', async (req, res) => {
  const  hallTicketNumber  = req.params.hallTicketNumber
  console.log(hallTicketNumber)

  try {
    // Find the document for the given rollNo
    const studentMarks = await Marks.findOne({ rollNo:hallTicketNumber });
    console.log(studentMarks)
    if (!studentMarks) {
      return res.status(404).json({
        status: 'fail',
        message: 'Student not found',
      });
    }else{
      return res.send({code:200,message:'success it is',data:studentMarks})
    }

// Generate a PDF
// const pdfDoc = new PDFDocument();
// pdfDoc.pipe(res);

// pdfDoc.text(`Student Roll No: ${studentMarks.hallTicketNumber}`);

// // Iterate through semesters, subjects, and marks
// studentMarks.semesters.forEach((semester) => {
//   pdfDoc.text(`\nSemester No: ${semester.semesterNo}`);

//   semester.subjects.forEach((subject) => {
//     pdfDoc.text(`\nSubject: ${subject.subjectName}`);
//     pdfDoc.text(`Mid Marks: ${subject.marks.midMarks}`);
//     pdfDoc.text(`Assignment Marks: ${subject.marks.assignmentMarks}`);
//     pdfDoc.text(`Slip Test Marks: ${subject.marks.slipTestMarks}\n`);
//   });
// });

// pdfDoc.end();
}catch (error) {
      // Handle errors here
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      });
    };
  })


// Adding marks

// router.post('/marks/add-cie', async (req, res) => {
//   const { rollNo, semesterNo, cgpa, sgpa } = req.body;
//   const {subjects} = req.body
//   console.log(subjects)
  
//   const marksData = {
//     subjectName,
//     marks: {
//       midMarks,
//       assignmentMarks,
//       slipTestMarks,
//     },
//     cgpa,
//     sgpa
//   };

//   try {
//     let existingMark = await Marks.findOne({ rollNo });

//     if (!existingMark) {
//       existingMark = new Marks({
//         rollNo,
//         semesters: [
//           {
//             semesterNo,
//             subjects: [marksData],
//           },
//         ],
//       });

//       const updatedMark = await existingMark.save();

//       return res.status(201).json({
//         status: 'success',
//         data: updatedMark,
//       });
//     }

//     let existingSemester = existingMark.semesters.find((s) => s.semesterNo === semesterNo);

//     if (!existingSemester) {
//       existingSemester = { semesterNo, subjects: [marksData] };
//       existingMark.semesters.push(existingSemester);
//     } else {
//       existingSemester.subjects.push(marksData);
//     }

//     const updatedMark = await existingMark.save();

//     res.status(201).json({
//       status: 'success',
//       data: updatedMark,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       status: 'error',
//       message: 'Internal Server Error',
//     });
//   }
// });

router.post('/marks/add-cie', async (req, res) => {
  const { rollNo, semesterNo, cgpa, sgpa, subjects } = req.body;

  try {
    let existingMark = await Marks.findOne({ rollNo });

    if (!existingMark) {
      existingMark = new Marks({
        rollNo,
        semesters: [
          {
            semesterNo,
            subjects: subjects.map((subject) => ({
              subjectName: subject.name,
              marks: {
                midMarks: subject.midMarks,
                assignmentMarks: subject.cie, // Assuming cie is assignment marks
                slipTestMarks: subject.sliptest,
              },
              cgpa,
              sgpa,
            })),
          },
        ],
      });

      const updatedMark = await existingMark.save();

      return res.status(201).json({
        status: 'success',
        data: updatedMark,
      });
    }

    let existingSemester = existingMark.semesters.find((s) => s.semesterNo === semesterNo);

    if (!existingSemester) {
      existingSemester = {
        semesterNo,
        subjects: subjects.map((subject) => ({
          subjectName: subject.name,
          marks: {
            midMarks: subject.midMarks,
            assignmentMarks: subject.cie, // Assuming cie is assignment marks
            slipTestMarks: subject.sliptest,
          },
          cgpa,
          sgpa,
        })),
      };
      existingMark.semesters.push(existingSemester);
    } else {
      existingSemester.subjects.push(
        ...subjects.map((subject) => ({
          subjectName: subject.name,
          marks: {
            midMarks: subject.midMarks,
            assignmentMarks: subject.cie, // Assuming cie is assignment marks
            slipTestMarks: subject.sliptest,
          },
          cgpa,
          sgpa,
        }))
      );
    }

    const updatedMark = await existingMark.save();

    res.status(201).json({
      status: 'success',
      data: updatedMark,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
});


// router.post('/marks/add-cie', async (req, res) => {
//   const { rollNo, semesterNo, subjects, cgpa, sgpa } = req.body
//   try {
//     let existingMark = await Marks.findOne({ rollNo });

//     if (!existingMark) {
//       existingMark = new Marks({
//         rollNo,
//         semesters: [
//           {
//             semesterNo,
//             subjects,
//           },
//         ],
//         cgpa,
//         sgpa,
//       });

//       const updatedMark = await existingMark.save();

//       return res.status(201).json({
//         status: 'success',
//         data: updatedMark,
//       });
//     }

//     let existingSemester = existingMark.semesters.find((s) => s.semesterNo === semesterNo);

//     if (!existingSemester) {
//       existingSemester = { semesterNo, subjects };
//       existingMark.semesters.push(existingSemester);
//     } else {
//       existingSemester.subjects = subjects;
//     }

//     existingMark.cgpa = cgpa;
//     existingMark.sgpa = sgpa;

//     const updatedMark = await existingMark.save();

//     res.status(201).json({
//       status: 'success',
//       data: updatedMark,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       status: 'error',
//       message: 'Internal Server Error',
//     });
//   }
// });



// router.post('/marks/add-cie', async (req, res) => {
//   const { semesterNo, subjectName, assignmentMarks, slipTestMarks, cgpa, sgpa } = req.body;
//   const rollNo = req.body.rollNo
//   const midMarks = req.body.midMarks
//   console.log(midMarks)
//   const marks = {
//     subjectName,
//     marks: {
//       midMarks,
//       assignmentMarks,
//       slipTestMarks,
//     },
//     cgpa,
//     sgpa
//   };
//   console.log(marks)

//   try {
//     // Find the existing document for the given rollNo
//     let existingMark = await Marks.findOne({ rollNo });

//     if (!existingMark) {
//       // If the document doesn't exist, create a new one
//       existingMark = new Marks({
//         rollNo,
//         semesters: [
//           {
//             semesterNo,
//             subjects: [marks], // Initialize the subjects array with the new subject and marks
//           },
//         ],
//       });

//       // Save the new document to the database
//       const updatedMark = await existingMark.save();

//       return res.status(201).json({
//         status: 'success',
//         data: updatedMark,
//       });
//     }

//     // Find the semester or create a new one if it doesn't exist
//     let existingSemester = existingMark.semesters.find(
//       (s) => s.semesterNo === semesterNo
//     );

//     if (!existingSemester) {
//       // Initialize the subjects array with the new subject and marks
//       existingSemester = { semesterNo, subjects: [marks] };
//       existingMark.semesters.push(existingSemester);
//     } else {
//       // Add the new subject to the existing or newly created semester
//       existingSemester.subjects.push(marks);
//     }

//     // Save the updated document to the database
//     const updatedMark = await existingMark.save();

//     res.status(201).json({
//       status: 'success',
//       data: updatedMark,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       status: 'error',
//       message: 'Internal Server Error',
//     });
//   }
// });




module.exports = router;