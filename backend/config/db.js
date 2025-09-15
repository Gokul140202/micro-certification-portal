// backend/config/db.js
import { Sequelize } from "sequelize";
import path from "path";
import { fileURLToPath } from "url";

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SQLite file path
const databasePath = path.join(__dirname, "../database.sqlite");

// Single Sequelize instance
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: databasePath,
  logging: false,
});

// Test connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("SQLite DB connected successfully.");
  } catch (error) {
    console.error("Unable to connect to SQLite database:", error);
  }
};

export { sequelize, connectDB };
