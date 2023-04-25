// import * as mathsteps from "mathsteps";
// import { useState } from "react";

// const MathSteps = (props) => {
//   const [steps, setSteps] = useState([]);

//   async function handleChange() {

//     await mathsteps.simplifyExpression(props.equation, (eqSteps) => {
//       setSteps(eqSteps);
//       console.log(steps);
//     })
//   }
//   // console.log(props.equation);
//   // setSteps(mathsteps.simplifyExpression(props.equation));
// 	// useEffect(()=>{
// 	// 	setSteps(mathsteps.simplifyExpression(props.equation));
// 	// }, [])
//   // setSteps(steps);
//   // logSteps(steps);

//   return (

//     <div>
//       <div>
// 			<label>Equation: {props.equation}</label>
// 			<button onClick={handleChange}>Solve</button>
// 		  </div>
//       {
//         <div className="math-steps">
//           {steps.map((step) => (
//             <div key={step.key}>
//                {"before change:"+ step.oldNode.toString()}
//               </div>
//           ))}
//         </div>
//       }
//     </div>
//   );
// };

// // const logSteps = function (steps) {
// //   steps.forEach((step) => {
// //     console.log("before change: " + step.oldNode.toString()); // before change: 2 x + 2 x + x + x
// //     console.log("change: " + step.changeType); // change: ADD_POLYNOMIAL_TERMS
// //     console.log("after change: " + step.newNode.toString()); // after change: 6 x
// //     console.log("# of substeps: " + step.substeps.length); // # of substeps: 3
// //   });
// // };

// export default MathSteps;
