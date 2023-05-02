import ReactDOM from "react-dom/client";
import { useState } from "react";
import MathContext from "./MathContext";
import ImageProcessor from "./ImageProcessor";
import Plotter from "./Plotter";
import EquationSolver from "./EquationSolver";

const App = () => {
  const mathExpression = useState();

  return (
    <div>
      <MathContext.Provider value={mathExpression}>
        <h1>ASpaceMath</h1>
        <ImageProcessor></ImageProcessor>
        <Plotter></Plotter>
        <EquationSolver></EquationSolver>
      </MathContext.Provider>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
