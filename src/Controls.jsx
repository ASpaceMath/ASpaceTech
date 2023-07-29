import ExpressionUploader from "./ExpressionLoader";
import ExpressionAnalysis from "./ExpressionAnalysis";

const Controls = () => {
  return (
    <div className="ast-ctrls-container flex h-9">
      <ExpressionUploader />
      <ExpressionAnalysis />
    </div>
  );
};

export default Controls;
