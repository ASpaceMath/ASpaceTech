import { useState, useContext, useEffect } from "react";
import MathContext from "./MathContext";
import ImageUpload from "./ImageUpload";
// import Canvas from "./Canvas";

const ImageProcessor = () => {
  const [image, setImage] = useState();
  // eslint-disable-next-line no-unused-vars
  const [mathExpression, setMathExpression] = useContext(MathContext);

  useEffect(() => {
    async function imageToMathPix(img) {
      try {
        await fetch("https://api.mathpix.com/v3/text", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            app_key: process.env.REACT_APP_API_KEY,
          },
          body: JSON.stringify({
            src: img,
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
            setMathExpression([...mathExpression, response.data[0].value]);
          });
      } catch (e) {
        console.log(e.message);
      }
    }

    if (image) {
      imageToMathPix(image);
    }
  }, [image]);

  return (
    <div className="imageProcessor">
      <ImageUpload setImage={setImage} />
      {/* <Canvas setImage={setImage} />
      <img alt="" src={image} /> */}
    </div>
  );
};

export default ImageProcessor;
