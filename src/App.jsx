import ReactDOM from "react-dom/client";
import { useState } from "react";
import MathContext from "./MathContext";
// import ImageProcessor from "./ImageProcessor";
import Plotter from "./Plotter";
import Expressions from "./Expressions";

const App = () => {
  const mathExpression = useState([]);

  return (
    <div className="h-full">
      <MathContext.Provider value={mathExpression}>
        <header className="w-full bg-asm_dgreen text-center font-sans text-4xl text-asm_white">
          <p className="p-2">ASpaceTech</p>
        </header>
        <div className="h-1 w-full bg-asm_lbrown"></div>
        <div className="flex h-full w-full flex-row flex-wrap bg-asm_white">
          <div id="plotter" className="w-3/4">
            <Plotter />
          </div>
          <div className="w-1/4">
            <Expressions />
          </div>
          {/* <ImageProcessor /> */}
        </div>
      </MathContext.Provider>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
