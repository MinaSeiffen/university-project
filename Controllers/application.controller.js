import applicationModel from "../Models/application.model.js";

export const postApplication = async (req, res) => {
  try {
    const {
      name,
      universityName,
      imgSrc,
      phone,
      nationality,
      residence,
      planStart,
      rangeOfBudget,
      passport,
      education,
    } = req.body;
    const userId = req.user._id;

    const application = new applicationModel({
      name,
      universityName,
      imgSrc,
      phone,
      nationality,
      residence,
      planStart,
      rangeOfBudget,
      passport,
      education,
      userId,
    });

    await application.save();

    res.status(200).json({ application, message: "Thank you for appling" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllApps = async (req, res) => {
  const userId = req.user._id;
  try {
    const applications = await applicationModel.find({userId: userId})

    res.status(200).json({ applications: applications})
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}