import React from "react";
import { useEffect, useState } from "react";
import "./imageQuiz.css";

function ImageQuiz() {
  const [randpoke, setrandpoke] = useState();
  const [userguess,setuserguess]=useState();
  let randomno = () => {
    return Math.floor(Math.random() * (50 - 1) + 1);
  };
  useEffect(() => {
    let axios = require("axios");
    let fetchtdata = async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randomno()}`)
        .then((Response) => {
          console.log(Response.data.name);
          setrandpoke(Response.data.name.toLowerCase());
        });
    };
    fetchtdata();
  }, []);
  return (
    <div>
      <div>
        <img
          src={`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/${randpoke}.png`}
          id="quiz_img"
        />
        <input onChange={(e)=>{
          setuserguess(e.target.value)
          console.log(e.target.value)
        }}/>
        <button>GO</button>
      </div>
    </div>
  );
}

export default ImageQuiz;
