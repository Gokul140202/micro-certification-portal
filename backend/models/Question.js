// Question.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Question = sequelize.define("Question", {
  quizId: DataTypes.INTEGER,
  questionText: DataTypes.STRING,
  options: DataTypes.JSON,
  correctAnswer: DataTypes.STRING,
});

export default Question; // ✅ default export
