import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
function ImageCard({ imageUrls }) {
  console.log(imageUrls);
  return (
    <div className="flex justify-evenly flex-wrap">
      {Object.entries(imageUrls).map((entry) => (
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
          <div
            style={{ "background-image": `url(${entry[1]})` }}
            className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
          ></div>
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
              {entry[0].split("_").join(" ").toUpperCase()}
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageCard;
