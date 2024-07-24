    import React from 'react';
    import SearchField from 'pages/home/components/SearchField';

    const EditableTextInput = ({ label, name, value, onChange }) => (
        <div className='w-full'>
            <p className="text-md font-semibold text-gray-600">{label}</p>
            <SearchField background='bg-white' value={value} onChange={onChange} />
        </div>
    );

    export default EditableTextInput;
