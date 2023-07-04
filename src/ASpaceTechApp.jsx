import { useState } from "react";
import MathContext from "./MathContext";
import Plotter from "./Plotter";
import ControlPanel from "./ControlPanel";

const ASpaceTechApp = () => {
  const mathExpression = useState([]);

  return (
    <div className="ast-app-container flex h-screen w-full flex-wrap sm:flex-nowrap">
      <MathContext.Provider value={mathExpression}>
        <Plotter />
        <ControlPanel />
      </MathContext.Provider>
    </div>
  );
};

export default ASpaceTechApp;
