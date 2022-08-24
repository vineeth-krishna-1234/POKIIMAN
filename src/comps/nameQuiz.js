import React from "react";
import { useEffect, useState } from "react";


function NameQuiz() {
  const [randpoke, setrandpoke] = useState([]);
  const [userguess, setuserguess] = useState();
  let randomno = () => {
    return Math.floor(Math.random() * (50 - 1) + 1);
  };
  useEffect(() => {
    let axios = require("axios");
    let fetchtdata = async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randomno()}`)
        .then((Response) => {
          console.log(Response.data.moves);
          setrandpoke(Response.data.moves);
        });
    };
    fetchtdata();
  }, []);

  return <div>{randpoke.length>0 && randpoke.map((obj)=>(
    <p>{obj.move.name}</p>)
  )}</div>;
}

export default NameQuiz;
