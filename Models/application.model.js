import mongoose from "mongoose"

const applicationSchema = new mongoose.Schema({
    name: {type: String , required: true},
    universityName: {type: String },
    phone: {type: String , required: true},
    nationality:{type: String , required: true},
    residence : {type: String , required: true},
    planStart: {type: String , required: true},
    rangeOfBudget : {type: String , required: true},
    passport: {type: String , required: true},
    education: {type: String , required: true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
},{timestamps: true})

const applicationModel = mongoose.model('Application' , applicationSchema)

export default applicationModel