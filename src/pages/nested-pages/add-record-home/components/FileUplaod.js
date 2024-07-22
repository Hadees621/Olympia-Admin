import React, { useRef, useState } from 'react';
import Button from 'components/Button';

const FileUpload = ({ title }) => {
    const fileInputRef = useRef(null);
    const [dragging, setDragging] = useState(false);

    const handleSelectFiles = () => {
        fileInputRef.current.click();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const files = event.dataTransfer.files;
        console.log(files);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragging(false);
    };

    return (
        <div className='shadow-lg p-4'>
            <label className="block font-bold text-lg mb-1">{title}</label>
            <div className="w-full p-2 rounded mb-4 space-x-3">
                <Button
                    title="Select Files"
                    text="text-white"
                    bg="bg-orange-500"
                    onclick={handleSelectFiles}
                />
                <Button
                    title="Upload"
                    text="text-white"
                    bg="bg-green-600"
                />
                <div
                    className={`border-2 border-dotted border-black ${dragging ? 'border-dashed border-blue-500' : 'border-gray-300'} rounded p-8 my-4 flex justify-center items-center cursor-pointer`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                >
                    <span className='font-bold text-md'>{dragging ? 'Drop files here' : 'Drag & Drop files here or click "Select Files"'}</span>
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    multiple
                    onChange={(event) => {
                        const files = event.target.files;
                        console.log(files);
                    }}
                />
            </div>
        </div>
    );
};

export default FileUpload;

