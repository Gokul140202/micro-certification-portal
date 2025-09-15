import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";
import QuestionCard from "../components/QuestionCard";
import Result from "../components/Result";
import "../styles/Quiz.css";

export default function QuizPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    API.get(`/quiz/${id}/questions`)
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleSelect = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = async () => {
    try {
      const formattedAnswers = Object.keys(answers).map((questionId) => ({
        questionId,
        answer: answers[questionId],
      }));

      const res = await API.post("/quiz/submit", { quizId: id, answers: formattedAnswers });

      setScore(res.data.score);
      setSubmitted(true);
    } catch (err) {
      alert(err.response?.data?.message || "Submission failed");
    }
  };

  const handleRestart = () => {
    navigate("/");
  };

  if (submitted) {
    return <Result score={score} total={questions.length} onRestart={handleRestart} />;
  }

  return (
    <div className="quiz-container">
      <h2>Quiz</h2>
      {questions.map((q) => (
        <QuestionCard key={q.id} question={q} handleSelect={handleSelect} />
      ))}
      {questions.length > 0 && (
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
}
