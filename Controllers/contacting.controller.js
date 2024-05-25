import contactModel from "../Models/contacting.model.js";

export const contactRequest = async (req, res) => {
    try {
        const {name , phone , contactType} = req.body;
        const request = new contactModel({
            name,
            phone,
            contactType,
        })
        await request.save()
        res.status(200).json({message: 'Your Request was sent successfully'})
    } catch (error) {
        res.status(500).json({error: 'internal Server Error'});
    }
}