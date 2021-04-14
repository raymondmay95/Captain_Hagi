import React from "react";
import Plot from "react-plotly.js";

function Graphy({ data, title }) {
  if (data) {
    let xData = data.map((ele, i) => ele?.name);
    let yData = data.map((ele) =>
      title === "Temperature (F)"
        ? ele.temperature
        : ele.windSpeed.split(" ")[0]
    );
    let trace = {
      y: yData,
      x: xData,
      mode: "line",
      connectgaps: true,
      labels: data.map((ele, i) => ele.name),
      marker: { color: "red" },
      layout: {
        width: "100%",
        height: "100%",
        title: title,
        font: { size: 10 },
      },
    };
    const { x, y, type, mode, marker, layout } = trace;
    return (
      <Plot
        data={[
          {
            x,
            y,
            type,
            mode,
            marker,
          },
          //   { type: "bar", x: [1, 2, 3], y: [253] },
        ]}
        layout={layout}
        config={{ responsive: true }}
      />
    );
  }
}

export default Graphy;
