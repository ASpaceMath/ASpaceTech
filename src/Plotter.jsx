import { useContext } from "react";
import MathContext from "./MathContext";
import Plot from "react-plotly.js";

function makeComputable(mathExp) {
  //assume for now that all terms in mathExp are separated by a space
  //assume for now that we have an y = mx + b expression, we're going
  //to drop the y = part and transform to string 'm*x + b'
  let mathTokens = mathExp.split("=");
  mathTokens =
    mathTokens[mathTokens.findIndex((s) => s.includes("x"))].split(" ");

  let computableExpression = "";
  for (var i = 0; i < mathTokens.length; ++i) {
    if (mathTokens[i].includes("x")) {
      var idx_x = mathTokens[i].indexOf("x");
      computableExpression += mathTokens[i].substr(0, idx_x) + "*";
      if (mathTokens[i].includes("^")) {
        var idx_pow = mathTokens[i].indexOf("^");
        computableExpression +=
          "Math.pow(x," + mathTokens[i].substr(idx_pow + 1) + ")" + " ";
      } else {
        computableExpression += mathTokens[i].substr(idx_x) + " ";
      }
    } else {
      computableExpression += mathTokens[i] + " ";
    }
  }

  return computableExpression.trim();
}

const Plotter = () => {
  const [mathExpression] = useContext(MathContext);

  let xValues = [];
  let yValues = [];

  let xMin = -10;
  let xMax = 10;
  if (mathExpression) {
    for (let x = xMin; x <= xMax; ++x) {
      xValues.push(x);
      yValues.push(eval(makeComputable(mathExpression)));
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
