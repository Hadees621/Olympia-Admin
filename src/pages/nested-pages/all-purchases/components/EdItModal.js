import Cross from 'utils/icons/Cross';
import Button from 'components/Button';
import React, { useState, useEffect } from 'react';

const EditModal = ({ isOpen, onClose, data, onSave }) => {
    const [formData, setFormData] = useState(data || {});

    useEffect(() => {
        if (data) {
            setFormData(data);
        }
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen || !data) return null;

    return (
        <div onClick={handleOverlayClick} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-[70vh] h-auto max-h-[100vh] relative">
                <button onClick={onClose} className="absolute top-6 right-6 text-red-500 text-2xl">
                    <Cross />
                </button>
                <h2 className="text-xl font-bold mb-4 text-start">Edit Purchase Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="overflow-y-auto max-h-[70vh] custom-scrollbar">
                        <table className="text-start mx-auto w-full">
                            <tbody>
                                {Object.entries(formData).map(([key, value], index) => (
                                    <tr key={index} className="">
                                        <td className="px-6 py-4 whitespace-nowrap uppercase font-bold text-gray-700">{key}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input
                                                type="text"
                                                name={key}
                                                value={value}
                                                onChange={handleChange}
                                                className="w-full border px-2 py-1 rounded"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end mt-4 gap-2">
                        <Button title={"Cancel"} onClick={onClose} />
                        <Button title={"Submit"} onClick={onClose} bg='bg-green-600' hover='hover:bg-green-700' text={"text-white"} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
