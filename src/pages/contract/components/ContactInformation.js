import React, { useState } from 'react';

const ContractInformation = ({ infoLeft, infoRight, isEditable }) => {
    const [formState, setFormState] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="w-full shadow-md bg-[#F7F7F7]">
            <div className="p-5 mx-4 border-b">
                <p className="text-xl font-bold">Contract Information</p>
            </div>
            <div className="flex justify-between gap-14 p-8">
                <div className="w-full grid gap-4">
                    {infoLeft.map((item, index) => (
                        <div key={index} className='w-full'>
                            <p className="text-md font-semibold text-gray-600">{item.label}</p>
                            {isEditable ? (
                                <textarea
                                    type="text"
                                    name={item.name}
                                    value={item.value}
                                    onChange={handleChange}
                                    rows={2}
                                    className='w-full'

                                />
                            ) : (
                                <p className="text-md font-semibold text-black max-w-sm">{item.value}</p>
                            )}
                        </div>
                    ))}
                    {isEditable && (
                        <div>
                            <p className="text-sm font-semibold text-gray-600">Ebook</p>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="ebook"
                                        value="Published"
                                        checked={formState.ebook === "Published"}
                                        onChange={handleChange}
                                        className='m-2'
                                    />
                                    Published
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="ebook"
                                        value="Unpublished"
                                        checked={formState.ebook === "Unpublished"}
                                        onChange={handleChange}
                                        className='m-2'
                                    />
                                    Unpublished
                                </label>
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-full grid gap-4 ">
                    {infoRight.map((item, index) => (
                        <div key={index} className='w-full'>
                            <p className="text-sm font-semibold text-gray-600 ">{item.label}</p>
                            {isEditable ? (
                                <textarea
                                    type="text"
                                    name={item.name}
                                    value={item.value}
                                    onChange={handleChange}
                                    rows={2}
                                    className='w-full'
                                />
                            ) : (
                                <p className="text-md font-semibold text-black">{item.value}</p>
                            )}
                        </div>
                    ))}
                    {isEditable && (
                        <div>
                            <p className="text-sm font-semibold text-gray-600">Fast Track</p>
                            <div className='flex space-x-3'>
                                <label className=''>
                                    <input
                                        type="radio"
                                        name="fastTrack"
                                        value="Yes"
                                        checked={formState.fastTrack === "Yes"}
                                        onChange={handleChange}
                                        className='m-2'
                                    />
                                    Yes
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="fastTrack"
                                        value="No"
                                        checked={formState.fastTrack === "No"}
                                        onChange={handleChange}
                                        className='m-2'

                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    )}
                    {isEditable && (
                        <div>
                            <p className="text-sm font-semibold text-gray-600">Situation</p>
                            <div className='space-y-3 grid'>
                                <label>
                                    <input
                                        type="radio"
                                        name="situation"
                                        value="Under Production"
                                        checked={formState.situation === "Under Production"}
                                        onChange={handleChange}
                                        className='m-2'
                                    />
                                    Under Production
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="situation"
                                        value="Released"
                                        checked={formState.situation === "Released"}
                                        onChange={handleChange}
                                        className='m-2'
                                    />
                                    Released
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="situation"
                                        value="Marketing"
                                        checked={formState.situation === "Marketing"}
                                        onChange={handleChange}
                                        className='m-2'
                                    />
                                    Marketing
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="situation"
                                        value="Remaindered"
                                        checked={formState.situation === "Remaindered"}
                                        onChange={handleChange}
                                        className='m-2'
                                    />
                                    Remaindered
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="situation"
                                        value="On Hold"
                                        checked={formState.situation === "On Hold"}
                                        onChange={handleChange}
                                        className='m-2'
                                    />
                                    On Hold
                                </label>
                            </div>
                        </div>
                    )}
                    {isEditable && (
                        <div className="max-w-md">
                            <button className="bg-green-600 p-3 text-white rounded-md">
                                Send Remainder Email
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContractInformation;


