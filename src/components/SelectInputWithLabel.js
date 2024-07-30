import React from 'react'
import Button from './Button'
import SelectField from './SelectField'

const SelectInputWithLabel = ({ placeholder,
    background = "bg-[#F7F7F7]",
    name, value, onChange, label, edit = false, flex = false }) => {
    return (
        <div className={`w-full ${flex && "flex items-center gap-3"}`}>
            <div className={`${flex && "w-[25%]"}`}>
                <p className="text-lg font-bold text-gray-600">{label}</p>
            </div>
            <SelectField placeholder={placeholder} value={value} onChange={onChange} background={background} name={name} />
            <div className='mt-3'>
                {edit && <Button title={"Edit"} />
                }
            </div>
        </div>
    )
}

export default SelectInputWithLabel