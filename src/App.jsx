import ReactDOM from "react-dom";
import { useState } from "react";
import Plotter from "./Plotter";
//import Module from "./Module";
 import * as mathsteps from "mathsteps";

async function getBase64(file, cb) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}

const App = () => {
  const [image, setImage] = useState();
  const [equation, setEquation] = useState("");
  const [xSteps, setXSteps] = useState([]);
  const [ySteps, setYSteps] = useState([]);

  async function handleChange(e) {
    console.group(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
    fileUpload(e.target.files[0]);
  }

  async function handleSolveEquation(){

    let equationSteps = mathsteps.simplifyExpression(equation.replace(/)
    console.log(equation);
    setSteps(equationSteps);
    console.log('solving equation: ' + equationSteps.length );
  }

  async function fileUpload(file) {
    try {
      await getBase64(file, (base64string) => {
        fetch("https://api.mathpix.com/v3/text", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            app_key:
              "c1a441f711d68478ff8292e7b98ca7a555891fc6012b175ce2ef11618edeeb87",
          },
          body: JSON.stringify({
            src: base64string,
            formats: ["text", "data", "html"],
            data_options: {
              include_asciimath: true,
              include_latex: true,
            },
          }),
        })
          .then((res) => res.json())
          // .then((response) => console.log(response));
          .then((response) => setEquation(response.data[0].value));
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div>
      <h1>ASpaceMath</h1>
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <img alt="" src={image} />
      <Plotter></Plotter>
      <h2>Solve Equation: {equation}</h2>
      <button onClick={handleSolveEquation}>Solve</button>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
