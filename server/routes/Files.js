import express from "express";
import { uploadFiles, getFile } from "../controller/file-controller.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFiles);
router.get("/file/:fileId", getFile);

export { router as fileRouter };
