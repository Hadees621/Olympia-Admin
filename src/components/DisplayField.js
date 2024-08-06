import React from 'react';

const DisplayField = ({ label, value }) => (
    <div className='w-full'>
        <p className="text-md font-semibold">{label}</p>
        <p className="text-md font-semibold text-black">{value}</p>
    </div>
);

export default DisplayField;
