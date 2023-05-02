import { useContext, useState } from "react";
import MathContext from "./MathContext";
import * as mathsteps from "mathsteps";

const EquationSolver = () => {
  // eslint-disable-next-line no-unused-vars
  const [mathExpression] = useContext(MathContext);
  const [xSteps, setXSteps] = useState([]);
  const [ySteps, setYSteps] = useState([]);

  async function handleSolveEquation() {
    equationSolver(mathExpression);
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
    <div className="math-steps">
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
    </div>
  );
};

export default EquationSolver;
