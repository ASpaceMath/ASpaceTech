import { useContext } from "react";
import MathContext from "./MathContext";
import Plot from "react-plotly.js";
import * as math from "mathjs";

//function makeComputable(mathExp) {
//  //assume for now that we have an y = f(x) expression, we're going
//  //to drop the y = part and transform to string for later evaluation
//  let f = math.parse(mathExp.split("=")[1]);
//  let computableExpression = math.simplify(f).toString();
//  return computableExpression;
//}

const Plotter = () => {
  const [mathExpression] = useContext(MathContext);

  let xValues = [];
  let yValues = [];

  let xMin = -10;
  let xMax = 10;
  if (mathExpression) {
    //assume for now that we have an y = f(x) expression, we're going
    //to drop the y = part and transform to string for later evaluation
    let f = math.parse(mathExpression.split("=")[1]);

    for (let x = xMin; x <= xMax; ++x) {
      xValues.push(x);
      yValues.push(f.evaluate({ x }));
    }
  }

  return (
    <div id="plotter">
      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            type: "line",
            mode: "lines",
          },
        ]}
        layout={{ width: 640, height: 480, title: mathExpression }}
      />
    </div>
  );
};

export default Plotter;
