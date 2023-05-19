import { useState, useContext, useEffect } from "react";
import MathContext from "./MathContext";
import ImageUpload from "./ImageUpload";

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
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  // eslint-disable-next-line no-unused-vars
  const [_, setMathExpression] = useContext(MathContext);

  useEffect(() => {
    async function imageToMathPix(file) {
      try {
        await getBase64(file, (base64String) => {
          fetch("https://api.mathpix.com/v3/text", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              app_key: "API_KEY!!",
            },
            body: JSON.stringify({
              src: base64String,
              formats: ["text", "data", "html"],
              data_options: {
                include_asciimath: true,
                include_latex: true,
              },
            }),
          })
            .then((res) => res.json())
            .then((response) => {
              console.log(response);
              setMathExpression(response.data[0].value);
            });
        });
      } catch (e) {
        console.log(e.message);
      }
    }

    if (file) {
      imageToMathPix(file);
      setImage(URL.createObjectURL(file));
    }
  }, [file]);

  return (
    <div className="imageProcessor">
      <ImageUpload setFile={setFile} />
      <img alt="" src={image} />
    </div>
  );
};

export default ImageProcessor;
