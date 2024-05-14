import express from "express"
import dotenv from "dotenv"
import connectMongoDB from "./DB/connection.js";
import cookieParser from "cookie-parser";

// Importing Routes
import authRoutes from "./Routes/auth.route.js"


dotenv.config()
const app = express()
const port = process.env.PORT || 3000


app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes)


// Server Port listener
app.listen(port, () => {
    console.log("Server is Running on port " + port);
    connectMongoDB();
  });