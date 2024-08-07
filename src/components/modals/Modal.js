import React from 'react';
import Button from '../Button';
import Cross from 'utils/icons/Cross';

const Modal = ({ isVisible, onClose, children, title, onSave, width = "max-w-[180vh]", saveButton = true }) => {
    if (!isVisible) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
            <div className={`${width} bg-white rounded-lg p-6 w-full h-auto max-h-[95vh] relative`}>
                <div className="flex justify-between items-center mb-4 border-b pb-5">
                    <h2 className="text-2xl font-semibold ">{title}</h2>
                    <button onClick={onClose} className="text-2xl">
                        <Cross />
                    </button>
                </div>
                <div className="overflow-y-auto max-h-[70vh] custom-scrollbar">
                    {children}
                </div>
                {saveButton && (
                    <div className="flex justify-end mt-4">
                        <Button title="Save Changes" onClick={onSave} />
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default Modal;
