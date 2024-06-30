const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const port = 3002;
const app = express();
app.use(express.json());
app.use(cors())
// const url = 'mongodb+srv://root:root@it3fsd.6cqlrhg.mongodb.net/minor?retryWrites=true&w=majority';
const url = 'mongodb+srv://root:root@it3fsd.6cqlrhg.mongodb.net/minor?retryWrites=true&w=majority';

const mentorSchema = require('./models/mentor');
const studentSchema = require('./models/student');
const adminSchema = require('./models/admin');

const studentCrud = require('./routes/studentCrud')
const subjectCrud = require('./routes/subjectCrud')
const attendanceCrud = require('./routes/attendanceCrud')
const activityPoints = require('./routes/activityPoints')
const mentorCrud = require('./routes/mentorCrud')

mongoose.connect(url)

const con = mongoose.connection;

con.on('open', ()=>{
    console.log("Connected to db");
})

app.use('/student', studentCrud)
app.use('/subject', subjectCrud)
app.use('/attendance', attendanceCrud)
app.use('/activity-points', activityPoints)
app.use('/mentor',mentorCrud)

app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`);
})