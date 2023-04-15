import React from "react";
import { useNavigate } from "react-router-dom";
function ItemCard({ pokeDetails }) {
  const navigate=useNavigate()

  
  return (
    <div className=" flex justify-center items-center">
      <div className="container flex justify-center">
        <div className="max-w-md m-6 w-[25vw]">
          <div className="bg-[#3F0071] relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img
              className="rounded-t-lg w-[50%] m-auto"
              src={`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/${pokeDetails.name.toLowerCase()}.png`}
              alt=""
            />
            <div className="py-6 px-8 rounded-lg bg-white">
              <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                {pokeDetails.name.toUpperCase()}
              </h1>
              <p className="text-gray-700 tracking-wide"></p>
              <button className="mt-6 py-2 px-4 bg-[#150050] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 m-2" >
                Buy Now
              </button>
              <button className="mt-6 py-2 px-4 bg-[#150050] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                Details
              </button>
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span className="text-md">
                {Math.floor(Math.random() * 2000) + 50}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
