import ReactDOM from "react-dom/client";
import ASpaceTechBanner from "./ASpaceTechBanner";
import ASpaceTechApp from "./ASpaceTechApp";

const App = () => {
  return (
    <div className="h-screen">
      <ASpaceTechBanner />
      <ASpaceTechApp />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
