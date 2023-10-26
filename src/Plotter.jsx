import { useContext } from "react";
import MathContext from "./MathContext";
import Plot from "react-plotly.js";
//import * as math from "mathjs";

const Plotter = () => {
  const [mathExpression] = useContext(MathContext);
  const traces = [];

  if (mathExpression) {
    //assume for now that we have an y = f(x) expression, we're going
    //to drop the y = part and transform to string for later evaluation
    mathExpression.forEach((expr) => {
      let xValues = [];
      let yValues = [];

      let xMin = -10;
      let xMax = 10;
      let fx = expr.nodeExpr;
      for (let x = xMin; x <= xMax; x += 0.02) {
        xValues.push(x);
        yValues.push(fx.evaluate({ x: x, ...expr.currentScope }));
      }

      traces.push({ x: xValues, y: yValues, type: "line", mode: "lines" });
    });
  }

  return (
    <div className="ast-draw-container ast-plot-container h-full w-full sm:w-3/4 sm:grow">
      <Plot
        data={traces}
        layout={{
          showlegend: false,
          autosize: true,
          margin: { l: 35, r: 20, b: 20, t: 20, pad: 5 },
          xaxis: {
            range: [-10, 10],
            ticks: "inside",
            linewith: 5,
            minor: { showgrid: true, linewidth: 1 },
          },
          yaxis: {
            range: [-10, 10],
            ticks: "inside",
            linewith: 5,
            minor: { showgrid: true, linewidth: 1 },
          },
        }}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Plotter;
