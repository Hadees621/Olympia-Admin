import React from 'react';
import Modal from 'components/modals/Modal';
import EditableInvoice from './EditiableInvoice';

const InvoiceModal = ({ isVisible, onClose, initialData, onSave }) => {
    const handleSave = (data) => {
        onSave(data);
        onClose();
    };

    return (
        <Modal
            isVisible={isVisible}
            onClose={onClose}
            title="New Invoice"
            onSave={() => handleSave(initialData)}
        >
            <EditableInvoice initialData={initialData} onSave={handleSave} />
        </Modal>
    );
};

export default InvoiceModal;
