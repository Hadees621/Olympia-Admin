import React from 'react'
import DisplayInfo from './DisplayInfo'
import Modal from 'components/modals/Modal'

const ViewModal = ({ isVisible, onClose, paymentData }) => {
    return (
        <Modal
            isVisible={isVisible}
            onClose={onClose}
            onSave={onClose}
            width="max-w-[70vh]"
            title="Telephone Payment Record"
        >
            <div className="w-full shadow">
                <div className="overflow-y-auto max-h-[70vh] custom-scrollbar p-6">
                    {paymentData.map((item, index) => (
                        <div key={index} className="mb-4 space-y-2">
                            {Object.entries(item).map(([key, value]) => (
                                <DisplayInfo key={key} label={key} value={value} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    )
}

export default ViewModal