import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import "../styles/Home.css";


export default function Home() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    API.get("/quiz")
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Available Quizzes</h2>
      {quizzes.length === 0 ? (
        <p>No quizzes available</p>
      ) : (
        quizzes.map((quiz) => (
          <div key={quiz.id} className="quiz-card">
            <h3>{quiz.title}</h3>
            <Link to={`/quiz/${quiz.id}`}>
              <button>Start Quiz</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
