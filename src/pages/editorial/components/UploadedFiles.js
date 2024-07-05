import React from "react";
import { filesData } from "../utils/utils";
const FileItem = ({ fileName }) => (
  <div className="py-4 flex justify-between">
    <p className="text-sm font-semibold">{fileName}</p>
    <button className="text-sm text-green-400">Download</button>
  </div>
);

const FileCategory = ({ category, files }) => (
  <div className="p-5 shadow-lg ">
    <p className="text-md font-bold py-5 border-b">{category}</p>
    {files.map((file, index) => (
      <FileItem key={index} fileName={file} />
    ))}
  </div>
);
const UploadedFiles = () => {
  return (
    <div className="w-full shadow-md bg-[#F7F7F7]">
      <div className="p-5 mx-4 border-b">
        <p className="text-xl font-bold">Uploaded files</p>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 p-3">
        {filesData.map((item, index) => (
          <FileCategory
            key={index}
            category={item.category}
            files={item.files}
          />
        ))}
      </div>
    </div>
  );
};

export default UploadedFiles;
