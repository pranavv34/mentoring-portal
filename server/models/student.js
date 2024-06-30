const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    },
    section:{
        type: String,
        required: true
    },
    halltktno:{
        type: Number,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true
    },
    contactno:{
        type: Number,
        required: true
    },
    // altcontactno:{
    //     type: Number,
    //     required: true
    // },
    email:{
        type: String,
        required: true
    },
    fname:{
        type: String,
        required: true
    },
    occ:{
        type: String,
        required: true
    },
    mname:{
        type: String,
        required: true
    },
    pcontact:{
        type: Number,
        required: true
    },
    altpcontact:{
        type: Number,
        required: true
    },
    pemail:{
        type: String,
        required: true
    },
    // address:{
    //     type: String,
    //     required: true
    // },
    // tenyr:{
    //     type: Number,
    //     required: true
    // },
    marks10th:{
        type: Number,
        required: true
    },
    // tweyr:{
    //     type: Number,
    //     required: true
    // },
    marks12th:{
        type: Number,
        required: true
    },
    // tensch:{
    //     type: String,
    //     required: true
    // },
    // twesch:{
    //     type: String,
    //     required: true
    // },
    // hobbies:String,
    // careerPlans: String,
    // strengths: String,
    // weakness: String,
})

module.exports = mongoose.model('Student', studentSchema)