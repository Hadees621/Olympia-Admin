import React, { useState } from 'react';
import Cross from 'utils/icons/Cross';

const EditListModal = ({ isOpen, onClose, options, setOptions }) => {
    const [newOption, setNewOption] = useState('');

    const handleAddOption = () => {
        if (newOption.trim() !== '') {
            setOptions([...options, newOption]);
            setNewOption('');
        }
    };

    const handleDeleteOption = (index) => {
        const updatedOptions = options.filter((_, i) => i !== index);
        setOptions(updatedOptions);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md ">
                <h2 className="text-lg font-semibold mb-4">Edit Payment Detail List</h2>
                <div className='max-h-[220px] overflow-auto px-5 custom-scrollbar'>

                    <div className="space-y-2">
                        {options.map((option, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <span>{option}</span>
                                <button
                                    onClick={() => handleDeleteOption(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <Cross color={"red"} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex space-x-2">
                        <input
                            type="text"
                            value={newOption}
                            onChange={(e) => setNewOption(e.target.value)}
                            placeholder="Add new option"
                            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleAddOption}
                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-600 border-none"
                        >
                            Add
                        </button>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default EditListModal;
