import React from "react";
import "../styles/Quiz.css";

export default function QuestionCard({ question, handleSelect }) {
  return (
    <div className="question-card">
      <h3>{question.text}</h3>
      {question.options.map((opt, index) => (
        <label key={index}>
          <input
            type="radio"
            name={`question-${question.id}`}
            onChange={() => handleSelect(question.id, opt)}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
