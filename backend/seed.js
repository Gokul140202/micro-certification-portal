import { sequelize } from "./config/db.js";
import Quiz from "./models/Quiz.js";   // ✅ default import

const seed = async () => {
  try {
    await sequelize.sync({ force: true }); // recreate tables
    await Quiz.bulkCreate([
      { title: "JavaScript Basics" },
      { title: "React Fundamentals" },
      { title: "Node.js Introduction" }
    ]);
    console.log("✅ Database seeded with quizzes");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
};

seed();
