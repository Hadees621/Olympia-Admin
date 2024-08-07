import EditModal from './EditModal'
import React, { useState } from 'react'
import Modal from 'components/modals/Modal'
import InputWithLabel from 'components/InputWithLabel'
import SelectInputWithLabel from 'components/SelectInputWithLabel'

const AddNewModal = ({ isModalVisible, setIsModalVisible }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isEditCModalOpen, setIsEditCModalOpen] = useState(false);
    return (
        <div>
            <Modal
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSave={() => setIsModalVisible(false)}
                width="max-w-[95vh]"
                title="Add New Bookshops"
            >
                <div className="w-full shadow">
                    <div className="overflow-y-auto max-h-[70vh] custom-scrollbar px-2">
                        <div className="space-y-5 p-4">
                            <InputWithLabel label="Company:" flex={true} />
                            <SelectInputWithLabel
                                label="Country:"
                                flex={true}
                                width="w-[25%]"
                                edit={true}
                                onClick={() => setIsEditModalOpen(true)}
                            />
                            <InputWithLabel label="First Name:" flex={true} />
                            <InputWithLabel label="Last Name:" flex={true} />
                            <InputWithLabel label="Designation:" flex={true} />
                            <InputWithLabel label="Address 1:" flex={true} />
                            <InputWithLabel label="Address 3:" flex={true} />
                            <InputWithLabel label="City/Town:" flex={true} />
                            <InputWithLabel label="Post Code:" flex={true} />
                            <InputWithLabel label="State/ County:" flex={true} />
                            <SelectInputWithLabel
                                label="Country:"
                                flex={true}
                                width="w-[25%]"
                                edit={true}
                                onClick={() => setIsEditCModalOpen(true)}
                            />
                            <InputWithLabel label="Telephone1:" flex={true} />
                            <InputWithLabel label="Telephone2:" flex={true} />
                            <InputWithLabel label="Email:" flex={true} />
                            <InputWithLabel label="Web Address:" flex={true} />
                        </div>
                    </div>
                </div>
            </Modal>
            <EditModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title="Add New City"
                label={"Enter City :"}
            />

            <EditModal
                isOpen={isEditCModalOpen}
                onClose={() => setIsEditCModalOpen(false)}
                title="Add New Country"
                label={"Enter Country :"}
            />
        </div>
    )
}

export default AddNewModal
