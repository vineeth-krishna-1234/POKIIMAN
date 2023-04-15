import React from "react";

function StatsCard({statDetails}) {
  return (
    <div class="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
      <div class="sm:flex sm:space-x-4">
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
          <div class="bg-white p-5">
            <div class="sm:flex sm:items-start">
              <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 class="text-sm leading-6 font-medium text-gray-400">
                  BASE EXP
                </h3>
                <p class="text-3xl font-bold text-black">{statDetails.exp}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
          <div class="bg-white p-5">
            <div class="sm:flex sm:items-start">
              <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 class="text-sm leading-6 font-medium text-gray-400">
                  WEIGHT
                </h3>
                <p class="text-3xl font-bold text-black">{statDetails.weight}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
          <div class="bg-white p-5">
            <div class="sm:flex sm:items-start">
              <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 class="text-sm leading-6 font-medium text-gray-400">
HEIGHT
                </h3>
                <p class="text-3xl font-bold text-black">{statDetails.height}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
