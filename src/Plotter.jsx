// const Module = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.arg1),
//     React.createElement("h2", {}, props.arg2),
//   ]);
// };

import Plot from "react-plotly.js";

const Plotter = () => {
  const math_expression = "3*x + 2";

  var xValues = [];
  var yValues = [];

  for (let x = -10; x <= 10; ++x) {
    yValues.push(eval(math_expression));
    xValues.push(x);
  }

  return (
    <div id="chart">
      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            type: "line",
            mode: "lines",
          },
        ]}
        layout={{ width: 640, height: 480, title: "y = " + math_expression }}
      />
    </div>
  );
};

export default Plotter;
