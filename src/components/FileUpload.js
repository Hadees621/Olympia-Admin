import React from 'react'
import Button from './Button'

const FileUpload = ({ buttonflag }) => {
    return (
        <div className='flex'>
            <input
                type="file"
                className="block -full text-sm text-gray-500
file:mr- file:py-2 file:px-4
file:rounded file:border-0
file:text-sm file:font-bold
hover:file:bg-blue-100"
            />
            {buttonflag && <Button title={"Upload"} />
            }
        </div>
    )
}

export default FileUpload