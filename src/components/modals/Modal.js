import React from 'react';
import Button from '../Button';
import Cross from 'utils/icons/Cross';

const Modal = ({ isVisible, onClose, children, title, onSave }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
            <div className="bg-white rounded-lg p-6 w-full max-w-[180vh] h-auto max-h-[95vh] overflow-y-auto relative">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-2xl">
                        <Cross />
                    </button>
                </div>
                {children}
                <div className="flex justify-end mt-4">
                    <Button title="Save Changes" onClick={onSave} />
                </div>
            </div>
        </div>
    );
};

export default Modal;
