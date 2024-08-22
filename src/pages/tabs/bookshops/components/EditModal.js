import React from 'react';
import Button from 'components/Button';
import Modal from 'components/modals/Modal';
import InputWithLabel from 'components/InputWithLabel';

const EditModal = ({ isOpen, onClose, title, label }) => {
    return (
        <Modal
            isVisible={isOpen}
            onClose={onClose}
            onSave={onClose}
            width="max-w-[70vh]"
            title={title}
            saveButton={false}
        >
            <div className="p- space-y-4 z-100 whitespace-nowrap">
                <InputWithLabel label={label} flex={true} labelwidth='w-[35%]' />
                <div className='flex justify-end'>
                    <Button title="Add" bg="bg-green-500" hover="hover:bg-green-600" text="text-white" onClick={onClose} />
                </div>
            </div>
        </Modal>
    );
};

export default EditModal;
