// backend/models/Quiz.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Quiz = sequelize.define("Quiz", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Quiz;
