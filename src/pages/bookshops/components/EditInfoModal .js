import React from 'react'
import Modal from 'components/modals/Modal'
import InputWithLabel from 'components/InputWithLabel'
import EditableTextarea from 'components/EditableTextarea'
import SelectInputWithLabel from 'components/SelectInputWithLabel'

const EditInfoModal = ({ isModalVisible, setIsModalVisible }) => {
    return (
        <div>
            <Modal
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSave={() => setIsModalVisible(false)}
                width="max-w-[95vh]"
                title="Edit Information"
            >
                <div className="w-full shadow">
                    <div className="overflow-y-auto max-h-[70vh] custom-scrollbar px-2">
                        <div className="space-y-5 p-4">
                            <InputWithLabel label="Company:" flex={true} />
                            <SelectInputWithLabel
                                label="Title:"
                                flex={true}
                                width="w-[25%]"
                                edit={true}
                            />
                            <InputWithLabel label="First Name:" flex={true} />
                            <InputWithLabel label="Last Name:" flex={true} />
                            <InputWithLabel label="Designation:" flex={true} />
                            <EditableTextarea label="Address :" flex={true} labelwidth="w-[35%]" background='bg-[#F7F7F7]'
                            />
                            <EditableTextarea label="Address 2:" flex={true} labelwidth="w-[35%]" background='bg-[#F7F7F7]'
                            />
                            <EditableTextarea label="Address 2:" flex={true} labelwidth="w-[35%]" background='bg-[#F7F7F7]'
                            />
                            <SelectInputWithLabel label="City/Town:" flex={true} />
                            <InputWithLabel label="Post Code:" flex={true} />
                            <InputWithLabel label="State/ County:" flex={true} />
                            <SelectInputWithLabel
                                label="Country:"
                                flex={true}
                                width="w-[25%]"
                                edit={true}
                            />
                            <InputWithLabel label="Telephone1:" flex={true} />
                            <InputWithLabel label="Telephone2:" flex={true} />
                            <InputWithLabel label="Email:" flex={true} />
                            <InputWithLabel label="Web Address:" flex={true} />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default EditInfoModal 
