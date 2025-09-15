import express from "express";
import { getAllQuizzes, getQuestions, submitQuiz } from "../controllers/quizController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();

// ✅ Public endpoint (no token needed)
router.get("/", getAllQuizzes);

// 🔒 Protected endpoints (need login)
router.get("/:quizId/questions", authMiddleware, getQuestions);
router.post("/submit", authMiddleware, submitQuiz);

export default router;
