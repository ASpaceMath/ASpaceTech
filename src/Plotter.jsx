// const Module = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.arg1),
//     React.createElement("h2", {}, props.arg2),
//   ]);
// };

import Plot from "react-plotly.js";

const Plotter = () => {
  return (
    <div id="chart">
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: "line",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: 640, height: 480, title: "test plot" }}
      />
    </div>
  );
};

export default Plotter;
