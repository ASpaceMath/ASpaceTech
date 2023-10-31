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

  const onChange = (e) => {
    e.preventDefault();
    getBase64(e.target.files[0], setImage);
  };

  return (
    <div className="ast-ul-icon m-auto text-center">
      <input type="file" onChange={onChange} hidden ref={inputRef} />
      <button onClick={() => inputRef.current.click()}>
        <span
          className="fa-regular fa-image text-asm_white"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Image Upload</span>
      </button>
    </div>
  );
};

export default ImageUpload;
