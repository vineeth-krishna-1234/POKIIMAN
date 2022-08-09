import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Particular_poke() {
  let params = useParams();
  let axios = require("axios");
  let [pokeDetail,setpokeDetail]=useState([JSON.parse(localStorage.getItem("particular_poke"))] || [])
  useEffect(() => {
    let getPoke = async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${params.poke}`)
        .then((Response) => {
            setpokeDetail(Response.data)
            localStorage.setItem("particular_poke",JSON.stringify(Response.data))
            console.log(Response.data)
            
          
        });
    };
    getPoke();
  },[]);
  let ex=()=>{
    console.log("he")
  }
  return <div>
    {ex()}
    {pokeDetail.length >0 &&
    <div>
    <img src={pokeDetail.sprites.front_default}/>
    <img src={pokeDetail.sprites.back_default}/>
    </div>
    }   
  </div>;
}
export default Particular_poke;