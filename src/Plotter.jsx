import { useContext } from "react";
import MathContext from "./MathContext";
import Plot from "react-plotly.js";
import * as math from "mathjs";

const Plotter = () => {
  const [mathExpression] = useContext(MathContext);
  const traces = [];

  if (mathExpression) {
    //assume for now that we have an y = f(x) expression, we're going
    //to drop the y = part and transform to string for later evaluation

    mathExpression.forEach((el) => {
      let xValues = [];
      let yValues = [];

      let xMin = -10;
      let xMax = 10;
      let f = math.parse(el.split("=")[1]);

      for (let x = xMin; x <= xMax; x += 0.5) {
        xValues.push(x);
        yValues.push(f.evaluate({ x }));
      }

      traces.push({ x: xValues, y: yValues, type: "line", mode: "lines" });
    });
  }

  return (
    <div className="h-full w-full">
      <Plot
        data={traces}
        layout={{
          showlegend: false,
          autosize: true,
          margin: { l: 35, r: 20, b: 20, t: 20, pad: 5 },
        }}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Plotter;
