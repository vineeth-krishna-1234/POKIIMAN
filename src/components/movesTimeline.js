import React, { useEffect } from "react";

const LeftComponent = ({ move }) => {
  return (
    <div class="flex flex-row-reverse md:contents">
      <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
        <h3 class="font-semibold text-lg mb-1">{move.move.name.toUpperCase()}</h3>
        <p class="leading-tight text-justify">
          <table class="table-auto">
            <thead>
              <tr>
                <th>version</th>
                <th>obtain method</th>
              </tr>
            </thead>
            <tbody>
              {move.version_group_details.map((groups) => {
                return (
                  <tr>
                    <td>{groups.version_group.name.split("-").join(" ").toUpperCase()}</td>
                    <td>{groups.move_learn_method.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </p>
      </div>
      <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
        </div>
        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
      </div>
    </div>
  );
};
const RightComponent = ({ move }) => {
  return (
    <div class="flex md:contents">
      <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
        </div>
        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
      </div>
      <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
        <h3 class="font-semibold text-lg mb-1">{move.move.name.toUpperCase()}</h3>
        <p class="leading-tight text-justify">
        <table class="table-auto">
            <thead>
              <tr>
                <th>VERSION</th>
                <th>OBTAINING METHOD</th>
              </tr>
            </thead>
            <tbody>
              {move.version_group_details.map((groups) => {
                return (
                  <tr>
                    <td className="pr-[5px]">{groups.version_group.name.split("-").join(" ").toUpperCase()}</td>
                    <td>{groups.move_learn_method.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </p>
      </div>
    </div>
  );
};

function MovesTimeline({ moveDetails }) {
  let flag = 0;
  useEffect(() => {}, []);

  return (
    <div class="container">
      <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        {moveDetails &&
          Object.keys(moveDetails).length &&
          moveDetails.map((moves) => {
            if (flag) {
              flag = 0;
              return <LeftComponent move={moves} />;
            } else {
              flag = 1;
              return <RightComponent move={moves} />;
            }
          })}
      </div>
    </div>
  );
}

export default MovesTimeline;
