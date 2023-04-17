import ReactDOM from "react-dom";
import { useState } from "react";
import Plotter from "./Plotter";
//import Module from "./Module";

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

async function fileUpload(file) {
  try {
    await getBase64(file, (base64string) => {
      fetch("https://api.mathpix.com/v3/text", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          app_key: "API_KEY!!!",
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
        .then((response) => console.log(response));
    });
  } catch (e) {
    console.log(e.message);
  }
}

const App = () => {
  const [image, setImage] = useState();

  async function handleChange(e) {
    console.group(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
    fileUpload(e.target.files[0]);
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
