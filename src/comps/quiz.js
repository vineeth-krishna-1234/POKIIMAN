import React from "react";
import Header_nav from "./header";
import ImageQuiz from "./imageQuiz";
import './quiz.css'
import {Link} from 'react-router-dom'

function QuizApp() {
  return (
    <div>
      <Header_nav />
      <Link to="/imageQuiz"><div>image quiz</div></Link>
      
      <div>Name quiz</div>

    </div>
  );
}

export default QuizApp;
