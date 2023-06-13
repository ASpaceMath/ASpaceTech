import { useContext } from "react";
import MathContext from "./MathContext";
import EquationSolver from "./EquationSolver";
import ImageProcessor from "./ImageProcessor";

const Expressions = () => {
  // eslint-disable-next-line no-unused-vars
  const [mathExpressions] = useContext(MathContext);

  return (
    <div>
      <ImageProcessor />
      <div className="mt-2 font-bold text-black">
        {mathExpressions ? (
          mathExpressions.map((mExpr) => {
            return (
              <span key={mExpr}>
                <EquationSolver key={mExpr} equation={mExpr} />
                <div key={mExpr} className="h-1 w-full bg-asm_lbrown"></div>
              </span>
            );
          })
        ) : (
          <p>Upload math expression</p>
        )}
      </div>
    </div>
  );
};

export default Expressions;
