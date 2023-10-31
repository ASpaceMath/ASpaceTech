import { useContext } from "react";
import MathContext from "./MathContext";
import { MathJax } from "better-react-mathjax";
import ExpressionUploader from "./ExpressionLoader";
//import EquationSolver from "./EquationSolver";

const Expressions = () => {
  // eslint-disable-next-line no-unused-vars
  const [mathExpressions, setMathExpressions] = useContext(MathContext);

  return (
    <div className="ast-expr-container flex w-full sm:flex-wrap">
      {mathExpressions
        ? mathExpressions.map((mExpr, idx) => {
            return (
              <div
                key={mExpr.asciimathExpr}
                className="ast-expression w-full font-bold text-black"
              >
                <div
                  key={mExpr.asciimathExpr}
                  className="h-1 w-full bg-asm_mgreen"
                ></div>
                <MathJax>
                  <h2 className="my-1 text-center text-xl">
                    {"`" + "y_" + idx + "=" + mExpr.asciimathExpr + "`"}
                  </h2>
                  <p className="mt-1 ml-2">
                    {"`" + mExpr.nodeExpr.toString() + "`"}
                  </p>
                  <div>
                    {Object.keys(mExpr.currentScope).map((variable) => {
                      return (
                        <div className="ml-2" key={variable}>
                          <label htmlFor={variable}>
                            {"`" + variable + ": `"}{" "}
                          </label>
                          <input
                            className="w-12 rounded-sm border-solid bg-asm_lbrown"
                            id={variable}
                            type="number"
                            defaultValue={mExpr.currentScope[
                              variable
                            ].toString()}
                            onChange={(e) => {
                              mathExpressions.find(
                                (m) => m.asciimathExpr === mExpr.asciimathExpr
                              ).currentScope[variable] = e.target.value;
                              setMathExpressions([...mathExpressions]);
                            }}
                          ></input>
                        </div>
                      );
                    })}
                  </div>
                </MathJax>
              </div>
            );
          })
        : null}
      <ExpressionUploader />
    </div>
  );
};

export default Expressions;
