import React from 'react'
import Button from 'components/Button'
import InputWithLabel from 'components/InputWithLabel'
import EditableTextarea from 'components/EditableTextarea'

const STEP2 = ({ next, prev }) => {
    return (
        <div className='w-full'>
            <div className="p-4 shadow-md w-full">
                <div className="bg-[#F7F7F7] p-2">
                    <h2 className="text-lg font-bold p-3 mb-2">BOOK INFORMATION</h2>
                </div>
                <div className='flex gap-5 px-6'>
                    <div className='space-y-3 mt-3 w-full'>
                        <InputWithLabel label={"Target audience age range (in years)*"} />
                        <EditableTextarea label={"Describe your target audience"} />
                    </div>
                    <div className='space-y-3 mt-3 w-full'>
                        <EditableTextarea label={"Describe your target audience"} />
                        <EditableTextarea label={"Book description*"} />
                        <EditableTextarea label={"Are there any books that are similar to yours that you know of, or that you took inspiration from?"} />
                        <p className="text-md font-semibold mt-2 italic text-gray-500 ">
                            Please review all information is correct before proceeding
                        </p>
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                    <Button title={"Previous"} text={"text-white"} bg='bg-gray-400' width={"w-[130px]"} onClick={prev} />
                    <Button title={"Next"} text={"text-white"} bg='bg-green-600' width={"w-[130px]"} onClick={next} />
                </div>
            </div>
        </div>
    )
}

export default STEP2