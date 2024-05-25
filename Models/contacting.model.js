import mongoose from "mongoose"

const contactingSchema = new mongoose.Schema({
    name: {type: String , required: true},
    phone: {type: String , required: true},
    contactType: {type: String , required: true}
})

const contactModel = mongoose.model('Contact' , contactingSchema)

export default contactModel