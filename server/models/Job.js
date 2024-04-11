const mongoose = require('mongoose');
const { Schema } = mongoose;


const JobSchema = new Schema({
    recruiter: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    position: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
    },
    companyImage: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    experienceLevel: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    workType: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        type: String,
        required: true,
    },
})

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;