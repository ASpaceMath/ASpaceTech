import ReactDOM from "react-dom/client";
import ASpaceTechBanner from "./ASpaceTechBanner";
import ASpaceTechApp from "./ASpaceTechApp";

const App = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-initial">
        <ASpaceTechBanner />
      </div>
      <div className="flex-auto">
        <ASpaceTechApp />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
