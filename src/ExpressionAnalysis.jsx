const ExpressionAnalysis = () => {
  return (
    <div className="ast-ctrls-expr-analyze-container flex w-1/2 justify-evenly">
      <div className="ast-ea-icon m-auto text-center">
        <span className="fa-solid fa-calculator" aria-hidden="true"></span>
        <span className="sr-only">Calculator</span>
      </div>
      <div className="ast-ea-icon m-auto text-center">
        <span className="fa-solid fa-sliders" aria-hidden="true"></span>
        <span className="sr-only">Parametric Analysis</span>
      </div>
      <div className="ast-ea-icon m-auto text-center">
        <span className="fa-solid fa-wrench" aria-hidden="true"></span>
        <span className="sr-only">Build Functions</span>
      </div>
    </div>
  );
};

export default ExpressionAnalysis;
