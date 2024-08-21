import React from 'react';
import Cross from 'utils/icons/Cross';

const Modal = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div onClick={handleOverlayClick} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-[70vh] h-auto max-h-[100vh] relative">
                <button onClick={onClose} className="absolute top-6 right-6 text-red-500 text-2xl">
                    <Cross />
                </button>
                <h2 className="text-xl font-bold mb-4 text-start">Purchase Details</h2>
                <div className="overflow-y-auto max-h-[70vh] custom-scrollbar">
                    <table className="text-start mx-auto w-full">
                        <tbody className=''>
                            {Object.entries(data).map(([key, value], index) => (
                                <tr key={index} className=''>
                                    <td className="px-6 py-4 whitespace-nowrap uppercase font-bold text-gray-700">{key}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Modal;
