import React from "react";

const Upload = ({ timestamp, filename, onDownload, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded shadow my-2 w-full gap-1">
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-600">{timestamp}</p>
        <p className="text-sm text-gray-600">{filename}</p>
      </div>
      <div className="flex gap-2 text-xs" >
        <button
          onClick={onDownload}
          className="bg-green-500 text-white px-2 py-2 rounded"
        >
          Download
        </button>
        <button
          onClick={onRemove}
          className="bg-red-500 text-white px-2 py-2 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Upload;
