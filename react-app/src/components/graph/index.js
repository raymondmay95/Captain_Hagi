import React from "react";
import Plot from "react-plotly.js";
// import * as classes from "./plot.module.css";

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
      marker: { color: "hsl(240, 66%, 48%)" },
      layout: {
        showlegend: false,
        title: title,
        width: "50%",
        height: "50%",
        font: { size: 10 },
        plot_bgcolor: "transparent",
        paper_bgcolor: "transparent",
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
