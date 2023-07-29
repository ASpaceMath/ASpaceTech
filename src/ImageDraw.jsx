// import { useRef, useEffect, useState } from "react";

// // TODO (JC): Investiage if these are the best cross-platform
// //            methods of determining position
// // TODO (JC): Investigate why there needs to be a divide by 2
// //            at the end
// function getPosition(e) {
//   let canvasX = 0;
//   let canvasY = 0;

//   if (e.type == "touchstart" || e.type == "touchmove") {
//     canvasX = e.touches[0].pageX - e.currentTarget.offsetLeft;
//     canvasY = e.touches[0].pageY - e.currentTarget.offsetTop;
//   } else if (e.type == "mousedown" || e.type == "mousemove") {
//     canvasX = e.nativeEvent.offsetX;
//     canvasY = e.nativeEvent.offsetY;
//   }

//   return { x: canvasX / 2, y: canvasY / 2 };
// }

// const ImageDraw = ({ setImage }) => {
//   const canvasRef = useRef(null);
//   const contextRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     //canvas.width = window.innerWidth * 2;
//     //canvas.height = window.innerHeight * 2;
//     //canvas.style.width = `${window.innerWidth}px`;
//     //canvas.style.height = `${window.innerHeight}px`;
//     canvas.width = 700;
//     canvas.height = 420;
//     //canvas.style.width = "700px";
//     //canvas.style.height = "420px";
//     canvas.style.border = "1px solid black";

//     const context = canvas.getContext("2d");
//     context.scale(2, 2);
//     context.lineCap = "round";
//     context.strokeStyle = "black";
//     context.lineWidth = 5;
//     contextRef.current = context;
//   }, []);

//   const startDrawing = (e) => {
//     e.preventDefault();

//     const { x, y } = getPosition(e);

//     contextRef.current.beginPath();
//     contextRef.current.moveTo(x, y);
//     setIsDrawing(true);
//   };
//   const finishDrawing = (e) => {
//     e.preventDefault();
//     contextRef.current.closePath();
//     setIsDrawing(false);
//   };
//   const draw = (e) => {
//     if (!isDrawing) return;
//     e.preventDefault();

//     const { x, y } = getPosition(e);

//     contextRef.current.lineTo(x, y);
//     contextRef.current.stroke();
//   };

//   return (
//     <div>
//       <button onClick={() => setImage(canvasRef.current.toDataURL())}>
//         {" "}
//         Snip Image{" "}
//       </button>

//       <div>
//         <canvas
//           id="canvas"
//           onMouseDown={startDrawing}
//           onMouseUp={finishDrawing}
//           onMouseMove={draw}
//           onTouchStart={startDrawing}
//           onTouchEnd={finishDrawing}
//           onTouchMove={draw}
//           ref={canvasRef}
//         />
//       </div>
//     </div>
//   );
// };
const ImageDraw = () => {
  //const ImageDraw = ({ setImage }) => {
  return (
    <button className="ast-ul-icon m-auto text-center">
      <span className="fa-solid fa-pencil" aria-hidden="true"></span>
      <span className="sr-only">Draw Upload</span>
    </button>
  );
};

export default ImageDraw;
