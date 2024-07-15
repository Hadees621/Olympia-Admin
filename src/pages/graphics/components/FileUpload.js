import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleUpload = () => {
    if (file) {
      console.log(`Uploading ${file.name}`);
      setFile(null);
      setFileName("");
    }
  };

  const handleSave = () => {
    console.log("Saving uploaded file information");
  };

  return (
    <div className="p-4 rounded shadow mb-4 w-full">
      <h3 className="font-bold mb-2">Upload Illustrations (Completed)</h3>
      <div className="flex items-center gap-2">
        <input type="file" onChange={handleFileChange} className="border p- text-sm" />
        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white p-2 rounded text-xs"
        >
          Upload
        </button>
      </div>
      {fileName && (
        <p className="mt-2 text-black font-bold text-md">
          Uploaded file: <span className="text-green-600 mx-2">{fileName}</span>
        </p>
      )}
      <button
        onClick={handleSave}
        className="mt-4 bg-green-500 text-white py-1 px-3 rounded text-sm"
      >
        Save
      </button>
    </div>
  );
};

export default FileUpload;
