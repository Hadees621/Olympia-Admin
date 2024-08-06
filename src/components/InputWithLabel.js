import React from 'react'
import Button from './Button'
import SearchField from 'pages/home/components/SearchField'

const InputWithLabel = ({ placeholder,
    background = "bg-[#F7F7F7]",
    name, value, onChange, label, edit = false, flex = false, labelwidth = "w-[25%]" }) => {
    return (
        <div className={`w-full ${flex ? "flex items-center gap-3" : "grid gap-2"}`}>
            <div className={`${flex ? labelwidth : "w-full"}`}>
                <p className="text-lg font-bold ">{label}</p>
            </div>
            <SearchField placeholder={placeholder} value={value} onChange={onChange} background={background} name={name} />
            {edit && <Button title={"Edit"} />
            }
        </div>
    )
}

export default InputWithLabel