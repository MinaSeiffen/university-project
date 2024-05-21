import express from "express"
import dotenv from "dotenv"
import connectMongoDB from "./DB/connection.js";
import cookieParser from "cookie-parser";
import cors from "cors"

// Importing Routes
import authRoutes from "./Routes/auth.route.js"


dotenv.config()
const app = express()
const port = process.env.PORT || 3000


app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

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