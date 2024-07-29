import React from 'react'
import Button from './Button'
import SelectField from './SelectField'

const SelectInputWithLabel = ({ placeholder,
    background = "bg-[#F7F7F7]",
    name, value, onChange, label, edit = false }) => {
    return (
        <div className='flex items-center gap-3 '>
            <p className="text-lg font-bold text-gray-600">{label}</p>
            <SelectField placeholder={placeholder} value={value} onChange={onChange} background={background} name={name} />
            {edit && <Button title={"Edit"} />
            }
        </div>
    )
}

export default SelectInputWithLabel