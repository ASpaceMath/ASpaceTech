// const Module = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.arg1),
//     React.createElement("h2", {}, props.arg2),
//   ]);
// };

const Module = (props) => {
  return (
    <div>
      <h1>{props.arg1}</h1>
      <h2>{props.arg2}</h2>
    </div>
  );
};

export default Module;
