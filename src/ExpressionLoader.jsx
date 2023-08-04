import { useState, useContext, useEffect } from "react";
import MathContext from "./MathContext";
import ImageUpload from "./ImageUpload";
import ImageDraw from "./ImageDraw";
import ImageCapture from "./ImageCapture";
import * as math from "mathjs";

const ExpressionLoader = () => {
  const [image, setImage] = useState();
  // eslint-disable-next-line no-unused-vars
  const [mathExpression, setMathExpression] = useContext(MathContext);

  const storeExpression = (expr) => {
    const scope = { b: 3 };
    const nodeExpr = math.parse(expr).transform(function (node) {
      if (node.isConstantNode) {
        return new math.SymbolNode("b");
      } else {
        return node;
      }
    });

    const expressionDetails = {
      asciimathExpr: expr,
      currentScope: scope,
      nodeExpr: nodeExpr,
    };

    setMathExpression([...mathExpression, expressionDetails]);
  };

  useEffect(() => {
    async function imageToMathPix(img) {
      try {
        await fetch("https://api.mathpix.com/v3/text", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            app_key: "API_KEY!",
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
            storeExpression(response.data[0].value.split("=")[1]);
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
    <div className="ast-ctrls-expr-upload-container flex w-1/2 justify-evenly">
      <ImageUpload setImage={setImage} />
      <ImageDraw />
      <ImageCapture />
    </div>
  );
};

export default ExpressionLoader;
