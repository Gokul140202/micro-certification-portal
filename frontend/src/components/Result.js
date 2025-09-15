import React from "react";
import "../styles/Result.css";

export default function Result({ score, total, onRestart }) {
  return (
    <div className="result-container">
      <h2>Quiz Result</h2>
      <p>
        You scored <strong>{score}</strong> out of <strong>{total}</strong>
      </p>
      <p>
        {score === total
          ? "Perfect! 🎉"
          : score >= total / 2
          ? "Good job! Keep improving!"
          : "Don't worry, try again!"}
      </p>
      <button onClick={onRestart}>Back to Home</button>
    </div>
  );
}
