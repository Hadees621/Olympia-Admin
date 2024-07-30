import React from 'react'
import DatePickerField from './DatePickerField'

const DatePickerWIthLabel = ({ placeholder,
    background = "bg-[#F7F7F7]",
    name, value, onChange, label, edit = false, flex = false }) => {
    return (
        <div className={`w-full ${flex && "flex items-center gap-3"}`}>
            <div className={`mb-2 ${flex && "w-[25%]"}`}>
                <p className="text-lg font-bold text-gray-600">{label}</p>
            </div>
            <DatePickerField background={background} />
        </div>
    )
}

export default DatePickerWIthLabel