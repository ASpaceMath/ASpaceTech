import { useContext } from "react";
import MathContext from "./MathContext";
import { MathJax } from "better-react-mathjax";
//import EquationSolver from "./EquationSolver";

const Expressions = () => {
  // eslint-disable-next-line no-unused-vars
  const [mathExpressions, setMathExpressions] = useContext(MathContext);

  return (
    <div className="ast-expr-container flex w-full sm:flex-wrap">
      {mathExpressions ? (
        mathExpressions.map((mExpr) => {
          return (
            <div
              key={mExpr.asciimathExpr}
              className="ast-expression mt-2 ml-2 w-full font-bold text-black"
            >
              <MathJax>
                <h2 className="text-center text-xl">
                  {"`" + mExpr.asciimathExpr + "`"}
                </h2>
                <p>{"`" + mExpr.nodeExpr.toString() + "`"}</p>
                <div>
                  {Object.keys(mExpr.currentScope).map((variable) => {
                    return (
                      <div key={variable}>
                        <label htmlFor={variable}>
                          {"`" + variable + ": `"}{" "}
                        </label>
                        <input
                          className="w-12 rounded-sm border-solid bg-asm_lbrown"
                          id={variable}
                          type="number"
                          defaultValue={mExpr.currentScope[variable].toString()}
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
              <div
                key={mExpr.asciimathExpr}
                className="h-1 w-full bg-asm_dgreen"
              ></div>
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
