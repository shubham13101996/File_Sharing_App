import dotenv from "dotenv";
import File from "../models/File.js";

dotenv.config();

export const uploadFiles = async (request, response) => {
  const fileObj = {
    path: request.file.path,
    name: request.file.originalname,
  };

  try {
    const file = await File.create(fileObj);
    response
      .status(200)
      .json({ path: `http://localhost:${process.env.PORT}/file/${file._id}` });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: error.message });
  }
};

export const getFile = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);

    file.downloadCount++;

    await file.save();

    response.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ msg: error.message });
  }
};
