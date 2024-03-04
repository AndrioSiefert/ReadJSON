import express from "express";
import JsonFormatted from "../models/JsonFormatted.js";

const router = express.Router();

router.get("/", JsonFormatted.formatted);
router.get("/download", JsonFormatted.download);

export default router;
