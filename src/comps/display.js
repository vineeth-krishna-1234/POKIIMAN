import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StatChat from "./statChart";
import "./display.css";
import Header_nav from "./header";

function Particular_poke() {
  let params = useParams();
  let axios = require("axios");
  let [pokeDetail, setpokeDetail] = useState(
    JSON.parse(localStorage.getItem("particular_poke")) || {}
  );
  let [stat, setstat] = useState({ lbl: [], val: [] });
  useEffect(() => {
    console.log(pokeDetail);
    let getPoke = async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${params.poke}`)
        .then((Response) => {
          setpokeDetail(Response.data);
          localStorage.setItem(
            "particular_poke",
            JSON.stringify(Response.data)
          );
        });
    };
    if (Object.keys(pokeDetail)) {
      getPoke();
    }
    
  }, []);
  let labels=['base Exp','height','weight','order']
  let val=[pokeDetail.base_experience,pokeDetail.height,pokeDetail.weight,pokeDetail.order]
  pokeDetail.stats.forEach(element => {
    labels.push(element.stat.name)
    val.push(element.base_stat)

    
  });
  return (
    <div>
      <Header_nav />
      {Object.keys(pokeDetail).length > 0 && (
        <div id="image_div">
          <img src={pokeDetail.sprites.front_default} />
          <img src={pokeDetail.sprites.back_default} />
          <img src={pokeDetail.sprites.front_shiny} />
          <img src={pokeDetail.sprites.back_shiny} />
          <div>
            <p>id:{pokeDetail.id}</p>
            <p>weight:{pokeDetail.weight}</p>
            <p>height:{pokeDetail.height}</p>
            <p>Base exp:{pokeDetail.base_experience}</p>
          </div>
          <div>
            {pokeDetail.abilities.map((obj) => (
              <p>{obj.ability.name}</p>
            ))}
          </div>
          <h4>Moves</h4>
          <div id="moves_div">
            {pokeDetail.moves.map((obj) => (
              <p>{obj.move.name}</p>
            ))}
          </div>
        </div>
      )}
      <div>
      <StatChat data={{lbl:labels,val:val}}/>
      </div>
    </div>
  );
}
export default Particular_poke;
