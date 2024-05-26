import userModel from "../Models/user.model.js";

export const updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, currentPassword,newPassword , birthDate } =
      req.body;
    const userId = req.user._id;

    let user = await userModel.findById(userId);
		if (!user) return res.status(404).json({ message: "User not found" });

		if ((!newPassword && currentPassword) || (!currentPassword && newPassword)) {
			return res.status(400).json({ error: "Please provide both current password and new password" });
		}

		if (currentPassword && newPassword) {
			const isMatch = await bcrypt.compare(currentPassword, user.password);
			if (!isMatch) return res.status(400).json({ error: "Current password is incorrect" });
			if (newPassword.length < 10) {
				return res.status(400).json({ error: "Password must be at least 10 characters long" });
			}

			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(newPassword, salt);
		}

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email
    user.phoneNumber = phoneNumber || user.phoneNumber
    user.birthDate = birthDate || user.birthDate

    user = await user.save();

    // password should be null in response
		user.password = null;

		return res.status(200).json({user , message: 'Profile updated successfully'});

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getProfileData = async (req, res) => {
  try {
    const userId = req.user._id;

    const userData = await userModel.findById(userId);

    res.status(200).json({ userData });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
