import express from "express";
import { uploadImages } from "../controllers/imageController.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../configs/clouddinaryConfig.js";
import multer from "multer";
const app = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    resource_type: "auto",
    folder: "image-RealStock-storage",
    allowedFormats: ["jpg", "png"],
  },
});
const upload = multer({ storage: storage });

app.post("/", upload.array("images", 10), uploadImages);
export default app;
