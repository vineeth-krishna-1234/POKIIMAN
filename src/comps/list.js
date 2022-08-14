import React from "react";
import { useState, useEffect } from "react";
import icon from "../images/icon.png";
import Header_nav from "./header";
import "./list.css";

function ListDisplay() {
  let axios = require("axios");
  const [poke, setpoke] = useState([]);

  const [NextTemp, setNextTemp] = useState("");
  const [PrevTemp, setPrevTemp] = useState("");
  const [nexturl, setnexturl] = useState(
    localStorage.getItem("next_url") || "https://pokeapi.co/api/v2/pokemon/"
  );
  useEffect(() => {
    let dataFetcher = async () => {
      await axios.get(nexturl).then((Response) => {
        setpoke(Response.data.results);
        setPrevTemp(Response.data.previous);
        setNextTemp(Response.data.next);
      });
    };
    dataFetcher();
  }, [nexturl]);
  const nextHandler = () => {
    console.log(NextTemp);
    localStorage.setItem("next_url", NextTemp);
    setnexturl(localStorage.getItem("next_url"));
    console.log("fuycfyut");
  };
  const prevHandler = () => {
    localStorage.setItem("next_url", PrevTemp);
    setnexturl(localStorage.getItem("next_url"));
  };
  const homeHandler = () => {
    localStorage.setItem("next_url", "https://pokeapi.co/api/v2/pokemon/");
    setnexturl(localStorage.getItem("next_url"));
  };

  return (
    <div>
      <Header_nav />
      <div>
        <button onClick={() => homeHandler()}>Home</button>
        <button onClick={() => prevHandler()}>previous</button>
        <button onClick={() => nextHandler()}>next Page</button>
      </div>
      <div id="list_div">
        {poke.length > 0 &&
          poke.map((obj, i) => (
            <div key={i} className="container">
              <div className="card">
                <div className="imgBx">
                  <img
                    src={`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/${
                      obj.name.toLowerCase() || { icon }
                    }.png`}
                  />
                </div>
                <div className="contentBx">
                  <h2>{obj.name.toUpperCase()}</h2>
                  <a href="#">Catch</a>
                  <a href="#">Details</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default ListDisplay;
