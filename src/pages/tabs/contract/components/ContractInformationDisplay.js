import DisplayField from 'components/DisplayField';
import React from 'react';

const ContractInformationDisplay = ({ infoLeft, infoRight }) => {
    return (
        <div className="w-full shadow-md bg-[#F7F7F7]">
            <div className="p-5 mx-4 border-b">
                <p className="text-xl font-bold">Contract Information</p>
            </div>
            <div className="flex justify-between gap-14 p-8">
                <div className="w-full grid gap-4">
                    {infoLeft.map((item, index) => (
                        <DisplayField key={index} label={item.label} value={item.value} />
                    ))}
                </div>
                <div className="w-full grid gap-4">
                    {infoRight.map((item, index) => (
                        <DisplayField key={index} label={item.label} value={item.value} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContractInformationDisplay;
