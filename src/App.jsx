import ReactDOM from "react-dom";
import { useState } from "react";
import Plotter from "./Plotter";
//import Module from "./Module";

const App = () => {
  const [image, setImage] = useState();
  function handleChange(e) {
    console.group(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <h1>ASpaceMath</h1>
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <img alt="" src={image} />
      <Plotter></Plotter>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
