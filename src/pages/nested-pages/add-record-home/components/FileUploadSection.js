import React from 'react';
import FileUplaod from './FileUplaod';
import Button from 'components/Button';

const FileUploadSection = () => {
  return (
    <div className="p-4 shadow">
      <div className="bg-[#F7F7F7] p-2 mb-6">
        <h2 className="text-lg font-bold p-3 mb-2">STEP 3 - UPLOAD FILES</h2>
      </div>
      <div className="grid gap-4">

        <FileUplaod title={"Upload contract"} />
        <FileUplaod title={"Upload Manuscript"} />
        <FileUplaod title={"Upload illustrations (Publisher)"} />

        <div className='m-5'>
          <Button title={"Add Record"} text={"text-white text-[14px] uppercase"} bg="bg-green-600" hover="hover:bg-green-700" width={"w-[160px]"} />
        </div>
      </div>
    </div>
  );
};

export default FileUploadSection;
