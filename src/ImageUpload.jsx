import { useRef } from "react";

const ImageUpload = ({ setFile }) => {
  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      className="dragDropZone"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h1>Drag and Drop Image to Upload</h1>
      <h1>Or</h1>
      <input
        type="file"
        multiple
        onChange={(e) => setFile(e.target.files[0])}
        hidden
        ref={inputRef}
      />
      <button onClick={() => inputRef.current.click()}>Select Image</button>
    </div>
  );
};

export default ImageUpload;
