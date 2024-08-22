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
                            <InputWithLabel label="Company:" flex={true} labelwidth="w-[20%]" />
                            <SelectInputWithLabel
                                label="Title:"
                                flex={true} labelwidth="w-[20%]"

                                edit={true}
                            />
                            <InputWithLabel label="First Name:" flex={true} labelwidth="w-[20%]" />
                            <InputWithLabel label="Last Name:" flex={true} labelwidth="w-[20%]" />
                            <InputWithLabel label="Designation:" flex={true} labelwidth="w-[20%]" />
                            <EditableTextarea label="Address :" flex={true} labelwidth="w-[20%]" background='bg-[#F7F7F7]'
                            />
                            <EditableTextarea label="Address 2:" flex={true} labelwidth="w-[20%]" background='bg-[#F7F7F7]'
                            />
                            <EditableTextarea label="Address 2:" flex={true} labelwidth="w-[20%]" background='bg-[#F7F7F7]'
                            />
                            <SelectInputWithLabel label="City/Town:" flex={true} labelwidth="w-[20%]" />
                            <InputWithLabel label="Post Code:" flex={true} labelwidth="w-[20%]" />
                            <InputWithLabel label="State/ County:" flex={true} labelwidth="w-[20%]" />
                            <SelectInputWithLabel
                                label="Country:"
                                flex={true} labelwidth="w-[20%]"
                                width="w-[25%]"
                                edit={true}
                            />
                            <InputWithLabel label="Telephone1:" flex={true} labelwidth="w-[20%]" />
                            <InputWithLabel label="Telephone2:" flex={true} labelwidth="w-[20%]" />
                            <InputWithLabel label="Email:" flex={true} labelwidth="w-[20%]" />
                            <InputWithLabel label="Web Address:" flex={true} labelwidth="w-[20%]" />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default EditInfoModal 
