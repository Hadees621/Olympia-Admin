import React from 'react'
import Button from 'components/Button'
import InputWithLabel from 'components/InputWithLabel'
import EditableTextarea from 'components/EditableTextarea'

const STEP1 = ({ onClick }) => {
    return (
        <div className='w-full mx-auto'>
            <div className="p-4 shadow-md w-full">
                <div className="bg-[#F7F7F7] p-2">
                    <h2 className="text-lg font-bold p-3 mb-2">ABOUT YOU</h2>
                </div>
                <div className='flex gap-5 px-6'>
                    <div className='space-y-3 mt-3 w-full'>
                        <InputWithLabel label={"Author name/ Pen name*"} />
                        <InputWithLabel label={"Confirm Book Title*"} />
                        <InputWithLabel label={"Email Address*"} />
                        <InputWithLabel label={"Contact number*"} />
                        <InputWithLabel label={"Date Of Birth*"} />
                        <InputWithLabel label={"Email Address*"} />
                        <InputWithLabel label={"Place of birth"} />
                        <InputWithLabel label={"Nationality"} />
                        <InputWithLabel label={"Occupation"} />
                        <InputWithLabel label={"Address line 1*"} />
                        <InputWithLabel label={"Address line 2"} />
                        <InputWithLabel label={"City*"} />
                        <InputWithLabel label={"County/ State"} />
                        <InputWithLabel label={"Postcode/ Zipcode*"} />
                        <InputWithLabel label={"Country*"} />
                        <InputWithLabel label={"How long have you lived at your current address?"} />
                    </div>
                    <div className='space-y-3 mt-3 w-full'>
                        <EditableTextarea
                            label={"Previous address"}
                            font='text-lg'
                            rows={5}
                            text={`Where else have you also lived? Please say when and for how long.`}
                        />

                        <EditableTextarea
                            label={"Hobbies"}
                            font='text-lg'
                            rows={5}
                            text={`Please describe any hobbies that you have (no more than 100 words).`}
                        />
                        <EditableTextarea
                            label={"Autobiography"}
                            font='text-lg'
                            rows={8}
                            text={`Please write a short autobiography (no more than 50 words).`}
                        />

                        <EditableTextarea
                            label={"Why did you choose to start writing?"}
                            font='text-lg'
                            rows={5}
                        />

                        <EditableTextarea
                            label={"What do you hope to achieve from publishing this book*"}
                            font='text-lg'
                            rows={5}
                        />

                        <div className='space-y-5 grid'>
                            <p className="text-lg font-semibold mt-2  ">
                                Please upload a high resolution photo of yourself (head and shoulder), we will use this as the author photo.
                            </p>
                            <Button title={"Choose File"} text={"text-white"} bg='bg-gray-400' width={"w-[160px]"} type={"file"} />
                        </div>

                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <Button title={"Next"} text={"text-white"} bg='bg-green-600' width={"w-[130px]"} onClick={onClick} />
                </div>
            </div>
        </div>
    )
}

export default STEP1