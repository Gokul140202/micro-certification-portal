import express from "express";
import { getResult, getCertificate } from "../controllers/resultController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:resultId", authMiddleware, getResult);
router.get("/cert/:resultId", authMiddleware, getCertificate);

export default router;
