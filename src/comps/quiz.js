import React from "react";
import Header_nav from "./header";
import ImageQuiz from "./imageQuiz";
import './quiz.css'

function QuizApp() {
  return (
    <div>
      <Header_nav />
      <div>image quiz</div>
      <ImageQuiz />
      
      <div>Name quiz</div>

    </div>
  );
}

export default QuizApp;
