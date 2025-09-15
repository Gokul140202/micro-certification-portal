// backend/controllers/quizController.js

import Question from "../models/Question.js";
import Result from "../models/Result.js";
import User from "../models/User.js";
import Quiz from "../models/Quiz.js";

// Fetch all quizzes
export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.json(quizzes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get questions for a quiz
export const getQuestions = async (req, res) => {
  try {
    const { quizId } = req.params;
    const questions = await Question.findAll({
      where: { quizId },
      attributes: ["id", "questionText", "options"]
    });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Submit quiz
export const submitQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;
    const userId = req.user.id;
    const questions = await Question.findAll({ where: { quizId } });

    let score = 0;
    answers.forEach(ans => {
      const q = questions.find(q => q.id === ans.questionId);
      if (q && q.correctAnswer === ans.answer) score++;
    });

    const result = await Result.create({
      quizId,
      userId,
      score,
      total: questions.length,
      pass: score >= Math.ceil(questions.length / 2)
    });

    res.json({ resultId: result.id, score, total: questions.length, pass: result.pass });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
