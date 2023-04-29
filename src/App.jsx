import ReactDOM from "react-dom/client";
import { useState } from "react";
import MathContext from "./MathContext";
import ImageProcessor from "./ImageProcessor";
import Plotter from "./Plotter";
import * as mathsteps from "mathsteps";

const App = () => {
  const mathExpression = useState();
  const [xSteps, setXSteps] = useState([]);
  const [ySteps, setYSteps] = useState([]);

  async function handleSolveEquation() {
    equationSolver(mathExpression[0]);
  }

  const equationSolver = function (equation) {
    typeof equation;
    let xSteps = equation.replace(/y/g, "(0)");
    let steps = mathsteps.solveEquation(xSteps);
    setXSteps(steps);

    let ySteps = equation.replace(/x/g, "(0)");
    steps = mathsteps.solveEquation(ySteps);
    setYSteps(steps);
  };

  return (
    <div>
      <MathContext.Provider value={mathExpression}>
        <h1>ASpaceMath</h1>
        <ImageProcessor></ImageProcessor>
        <Plotter></Plotter>
        <h2>Solve Equation: {mathExpression}</h2>
        <button onClick={handleSolveEquation}>Solve</button>
        <h3>Solve for x</h3>
        <div className="x-equation-steps">
          {xSteps.map((step) => {
            return (
              <ul key={step.id}>
                <li key={step.id}>before change: {step.oldEquation.ascii()}</li>
                <li key={step.id}>change: {step.changeType}</li>
                <li key={step.id}>after change: {step.newEquation.ascii()}</li>
                <li key={step.id}># of substeps: : {step.substeps.length}</li>
              </ul>
            );
          })}
        </div>
        <h3>Solve for y</h3>
        <div className="y-equation-steps">
          {ySteps.map((step) => {
            return (
              <ul key={step.id}>
                <li key={step.id}>before change: {step.oldEquation.ascii()}</li>
                <li key={step.id}>change: {step.changeType}</li>
                <li key={step.id}>after change: {step.newEquation.ascii()}</li>
                <li key={step.id}># of substeps: {step.substeps.length}</li>
              </ul>
            );
          })}
        </div>
      </MathContext.Provider>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
