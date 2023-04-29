import { useState, useContext } from "react";
import MathContext from "./MathContext";

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

const ImageProcessor = () => {
  const [image, setImage] = useState();
  // eslint-disable-next-line no-unused-vars
  const [_, setMathExpression] = useContext(MathContext);

  async function handleChange(e) {
    console.group(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
    fileUpload(e.target.files[0]);
    //setMathExpression("y = 1x^3 - 25x");
  }

  async function fileUpload(file) {
    try {
      await getBase64(file, (base64string) => {
        fetch("https://api.mathpix.com/v3/text", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            app_key: "API KEY!",
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
          .then((response) => setMathExpression(response.data[0].value));
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div className="imageProcessor">
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <img alt="" src={image} />
    </div>
  );
};

export default ImageProcessor;
