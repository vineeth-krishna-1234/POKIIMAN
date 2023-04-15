import React, { useState, useEffect } from "react";
import ImageCard from "../../components/imageCard";
import axios from "axios";
import StatsCard from "../../components/statsCard";
import MovesTimeline from "../../components/movesTimeline";
import PokeProfileCard from "../../components/pokeProfileCard";
import StatsChart from "../../components/statsChart";
import { ImageList, ImageListItem } from "@mui/material";
const flattenObject = (input) => {
  let result = {};
  for (const key in input) {
    if (!input.hasOwnProperty(key)) {
      continue;
    }
    if (typeof input[key] === "object" && !Array.isArray(input[key])) {
      var subFlatObject = flattenObject(input[key]);
      for (const subkey in subFlatObject) {
        result[key + "_" + subkey] = subFlatObject[subkey];
      }
    } else {
      result[key] = input[key];
    }
  }
  return result;
};


function PokeStats() {
  const [pokeData, setPokeData] = useState(null);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/1/").then((result) => {
      setPokeData(result.data);
    });
  }, []);
  return (
    <div>
      {pokeData && Object.keys(pokeData).length && (
        <div>
          <StatsCard
            statDetails={{
              exp: pokeData.base_experience,
              weight: pokeData.weight,
              height: pokeData.height,
            }}
          />
          <div className="flex justify-evenly">
            <PokeProfileCard secondaryStats={pokeData.stats} />
            <StatsChart chartValues={pokeData.stats} />
          </div>
<ImageCard imageUrls={flattenObject(pokeData.sprites)} />
          <div className="flex items-center justify-center">
            <MovesTimeline moveDetails={pokeData.moves} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PokeStats;
