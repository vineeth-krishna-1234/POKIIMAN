import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
function statChat(props) {
  return (
    <div>
      <Bar
        data={{
          labels: props.data.lbl,
          datasets: [
            {
              label: "POKE STAT",
              data: props.data.val,
              backgroundColor: [
                "rgb(88, 0, 255)",
                "rgb(0, 150, 255)",
                "rgb(55, 226, 213)",
                "rgb(177, 225, 255)",
                "rgb(0, 215, 255)",
                "rgb(114, 255, 255)",
                "rgb(193, 239, 255)",
              ],
            },
          ],
        }}
        height={400}
        width={600}
      />
    </div>
  );
}

export default statChat;
