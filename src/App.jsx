import ReactDOM from "react-dom";
import { useState } from "react";
//import Module from "./Module";

const App = () => {
  const [image, setImage] = useState();
  function handleChange(e)
  {
    console.group(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  }


  return (
    <div>
      <h1>ASpaceMath</h1>
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange}/>
      <img src={image}/>
      {/* <Module arg1="moduel1.arg1" arg2="module1.arg2" />
      <Module arg1="moduel2.arg1" arg2="module2.arg2" />
      <Module arg1="moduel3.arg1" arg2="module3.arg2" /> */}
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
