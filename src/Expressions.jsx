import { useContext } from "react";
import MathContext from "./MathContext";
import EquationSolver from "./EquationSolver";

const Expressions = () => {
  // eslint-disable-next-line no-unused-vars
  const [mathExpressions] = useContext(MathContext);

  return (
    <div className="ast-expr-container flex w-full sm:flex-wrap">
      {mathExpressions ? (
        mathExpressions.map((mExpr) => {
          return (
            <div
              key={mExpr}
              className="ast-expression mt-2 w-full font-bold text-black"
            >
              <EquationSolver key={mExpr} equation={mExpr} />
              <div key={mExpr} className="h-1 w-full bg-asm_dgreen"></div>
            </div>
          );
        })
      ) : (
        <p>Upload math expression</p>
      )}
    </div>
  );
};

export default Expressions;
