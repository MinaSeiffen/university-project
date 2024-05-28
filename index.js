import express from "express"
import dotenv from "dotenv"
import connectMongoDB from "./DB/connection.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import multer from "multer"
import {CloudinaryStorage} from "multer-storage-cloudinary"
import {v2 as cloudinary} from 'cloudinary'

// Importing Routes
import authRoutes from "./Routes/auth.route.js"
import appRoutes from "./Routes/application.route.js"
import contactRoutes from "./Routes/contacting.route.js"
import userRoutes from './Routes/user.route.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 3000


app.use(cors({
  origin: 'https://university-xli8.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE' , 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowedFormats: ['jpg', 'png', 'pdf'],
  },
});

const upload = multer({ storage: storage });

// Endpoint to upload passport
app.post('/upload/passport', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.status(200).json({ url: req.file.path });
});

// Endpoint to upload education certificate
app.post('/upload/education', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.status(200).json({ url: req.file.path });
});

// Routes
app.use("/api/auth", authRoutes) 
app.use("/api/application", appRoutes) 
app.use("/api/contact", contactRoutes) 
app.use("/api/user", userRoutes) 

// Server Port listener
app.listen(port, () => {
    console.log("Server is Running on port " + port);
    connectMongoDB();
  });