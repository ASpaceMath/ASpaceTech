import Controls from "./Controls";
import Expressions from "./Expressions";

const ControlPanel = () => {
  return (
    <div className="ast-ctrlpnl-container block h-24 w-full bg-asm_lbrown text-sm sm:h-full sm:w-1/4">
      <Controls />
      <Expressions />
    </div>
  );
};

export default ControlPanel;
