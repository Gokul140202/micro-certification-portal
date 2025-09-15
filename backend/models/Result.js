import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import User from "./User.js"; 

const Result = sequelize.define("Result", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quizId: { type: DataTypes.INTEGER, allowNull: false },
  score: { type: DataTypes.INTEGER, allowNull: false },
  total: { type: DataTypes.INTEGER, allowNull: false },
  pass: { type: DataTypes.BOOLEAN, allowNull: false },
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

Result.belongsTo(User, { foreignKey: "userId" });

export default Result;
