import React from 'react';

const DisplayInfo = ({ label, value }) => {
    return (
        <div className="w-full border- border-gray-300 py-3 px-">
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700 uppercase">{label}</span>
                <span className="text-lg text-gray-900 text-right">{value}</span>
            </div>
        </div>
    );
};

export default DisplayInfo;
