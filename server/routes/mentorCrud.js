const express = require('express');
const router = express.Router()
const Mentor = require('../models/mentor')
const bcrypt = require('bcryptjs')
const Student = require('../models/student')

const salt = 12;

router.post('/register-mentor', async (req, res, next) => {
    console.log(req.body)
    const std = {
        empid: req.body.teacherId,
        name: req.body.name,
        section: req.body.section,
        password: req.body.password,
        email: req.body.email,
        mobile: req.body.mobile,
    }
    try {
        const hash = await bcrypt.hash(std.password, salt);
        std.password = hash;
        const user = new Mentor(std);
        await user.save();
        res.status(201).json({message:"success", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/logint', async (req, res, next) => {
    const teacherId = req.body.teacherId
    const password = req.body.password
    // console.log(hallTicketNumber,password)
    
  let user;
  try {
    user = await Mentor.findOne({empid : teacherId });
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
    return res.status(200).json({ message: 'Logged in successfully!!',data:teacherId });
}
return res.status(404).json({ message: 'Invalid credentials' });
}
return res.status(404).json({ message: 'User not found' });
});

router.get('/:teacherid', async(req,res)=>{
    try {
        const teacherid = req.params.teacherid;
        console.log(teacherid)
        // Find the mentor by teacherid to get the section
        const mentor = await Mentor.findOne({ empid: teacherid });
        if (!mentor) {
          return res.status(404).json({ message: 'Mentor not found' });
        }
    
        const section = mentor.section; // Get the section from the mentor data
    
        // Find all students with the same section
        const students = await Student.find({ section });
    
        // Send the students array to the frontend
        res.status(200).json({message:"successssssss", data:students });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server Error' });
      }


})



module.exports = router