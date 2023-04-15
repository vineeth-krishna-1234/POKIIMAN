import React from "react";

function StatsChart({ chartValues }) {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
      <h2 className="text-xl font-bold">POKE EXP CHART</h2>
      <span className="text-sm font-semibold text-gray-500"></span>
      <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3 h-[30vh]">
        {chartValues &&
          chartValues.length &&
          chartValues.map((values) => (
            <div className="relative flex flex-col items-center flex-grow pb-5 group">
              <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                {values.base_stat}
              </span>
              <div className="relative flex justify-center w-full h-16 bg-indigo-400"></div>
              <span className="absolute bottom-0 text-xs font-bold">
                {values.stat.name.split("-").join(" ").toUpperCase()}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default StatsChart;
