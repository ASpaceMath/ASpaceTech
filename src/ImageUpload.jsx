import { useRef } from "react";

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

const ImageUpload = ({ setImage }) => {
  const inputRef = useRef();

  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // };

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   getBase64(e.dataTransfer.files[0], setImage);
  // };

  const onChange = (e) => {
    e.preventDefault();
    getBase64(e.target.files[0], setImage);
  };

  return (
    // <div
    //   className="dragDropZone"
    //   onDragOver={handleDragOver}
    //   onDrop={handleDrop}
    // >
    <div className="rounded py-1 px-4 text-center font-bold text-asm_dgreen hover:bg-asm_dgreen hover:text-asm_white">
      {/* <h1>Drag and Drop Image to Upload</h1>
      <h1>Or</h1> */}
      <input type="file" multiple onChange={onChange} hidden ref={inputRef} />
      <button onClick={() => inputRef.current.click()}>Select Image</button>
    </div>
  );
};

export default ImageUpload;
