import React from "react";
import Header_nav from "./header";
import './quiz.css'

function QuizApp() {
  return (
    <div>
      <Header_nav />
      <div>image quiz</div>
      <img src="https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/bulbasaur.png"  id="quiz_img"/>
      <div>Name quiz</div>

    </div>
  );
}

export default QuizApp;
