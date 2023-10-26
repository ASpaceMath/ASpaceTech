import ReactDOM from "react-dom/client";
import ASpaceTechBanner from "./ASpaceTechBanner";
import ASpaceTechApp from "./ASpaceTechApp";
import { MathJaxContext } from "better-react-mathjax";

const App = () => {
  const config = {
    loader: { load: ["input/asciimath"] },
  };

  return (
    <MathJaxContext config={config}>
      <div className="flex h-full flex-col">
        <div className="flex-initial">
          <ASpaceTechBanner />
        </div>
        <div className="flex-auto">
          <ASpaceTechApp />
        </div>
      </div>
    </MathJaxContext>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
