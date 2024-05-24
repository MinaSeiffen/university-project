import applicationModel from "../Models/application.model.js";

export const postApplication = async (req, res) => {
  try {
    const {
      name,
      universityName,
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
