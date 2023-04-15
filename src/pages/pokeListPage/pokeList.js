import React, { useEffect, useState } from "react";
import ItemCard from "../../components/itemcard/itemCard";
import axios from "axios";

function PokeList() {
  const [pokeList, setPoke] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((result) => {
      setPoke(result.data.results);
    });
  }, []);
  return (
    <div className="flex flex-wrap justify-evenly">
      {pokeList.length && pokeList.map((pokeDetails) => <ItemCard pokeDetails={pokeDetails} />)}
    </div>
  );
}

export default PokeList;
