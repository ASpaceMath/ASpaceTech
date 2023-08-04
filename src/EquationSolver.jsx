import { useState } from "react";
import * as mathsteps from "mathsteps";

const EquationSolver = ({ equation }) => {
  const [xSteps, setXSteps] = useState([]);
  const [ySteps, setYSteps] = useState([]);

  async function handleSolveEquation() {
    equationSolver(equation);
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
    <div className="w-full text-black">
      <button
        className="float-right rounded py-1 px-2 text-asm_white hover:bg-blue-700"
        onClick={handleSolveEquation}
      >
        Solve
      </button>
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
    </div>
  );
};

export default EquationSolver;
