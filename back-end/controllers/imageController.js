import cloudinary from "../configs/clouddinaryConfig.js";

export const uploadImages = async (req, res) => {
  try {
    console.log("run upload");
    const images = req.files.map((file) => file.path);
    const uploadedImages = [];
    for (let image of images) {
      const results = await cloudinary.uploader.upload(image);
      console.log("----------result----------");
      console.log(results);
      uploadedImages.push({
        url:
          "v" +
          results.version +
          "/" +
          results.public_id +
          "." +
          results.format,
        publicId: results.public_id,
      });
      console.log("--------------------------");
    }
    console.log("--------------------------");
    return res.json({
      message: "Upload images success",
      data: uploadedImages,
    });
  } catch (error) {
    return res.status(400).json({
      name: error.name,
      message: error.message,
    });
  }
};
