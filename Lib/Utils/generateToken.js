import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  try {
    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("JWT_SECRET_KEY is not defined");
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
      expiresIn: "15d",
    });

    res.cookie('token', token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: 'none',
      secure: process.env.NODE_ENV !== 'development',
      path: '/', 
    });

    console.log("Token generated and cookie set successfully");
  } catch (error) {
    console.error("Error generating token or setting cookie:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}; 
