import React, { useState } from 'react';
import SearchField from 'components/SearchField';
import InputWithLabel from 'components/InputWithLabel';
import EditableTextarea from 'components/EditableTextarea';
import EditListModal from 'components/modals/EditListModal';
import DatePickerWIthLabel from 'components/DatePickerWIthLabel';
import SelectInputWithLabel from 'components/SelectInputWithLabel';

const ViewInvoice = ({ initialData, onSave }) => {
    const [invoiceData, setInvoiceData] = useState(initialData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [options, setOptions] = useState([
        'paid by cheque',
        'paid by credit card',
        'paid by paypal',
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoiceData({
            ...invoiceData,
            [name]: value,
        });
    };

    return (
        <div className="space-y-6 p-4">
            <div className='w-full flex justify-end items-end'>
                <div className='grid items-end'>
                    <img
                        src="/assets/logo.png"
                        alt="logo"
                        className="h-20"
                    />
                    <div className='space-y-3 text-md mt-4 text-end pr-7'>
                        <p> T: +44 (0)20 3719 5833 </p>
                        <p> E: accounts@olympiapublishers.com </p>
                        <p> www.olympiapublishers.com </p>
                    </div>
                </div>
            </div>

            <div className='p-4 shadow'>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <SelectInputWithLabel label={"To:"} edit={true} flex={true} />
                        <p className='text-lg font-bold text-center my-2'>
                            <p className='font-bold text-start'> Address: </p>
                            Unite 8 Badgers Rise
                            Ridgemont <br />
                            United Kingdom
                            MK43 0ZA
                        </p>
                    </div>
                    <div>
                        <EditableTextarea label={"Shipping Address:"} rows={5} />
                    </div>
                </div>
                <div className='grid grid-cols-2 py-4 my-2'>

                    {/* Additional Details */}
                    <div className="grid gap-4 pr-4">
                        <InputWithLabel label={"Invoice Number: "} background='bg-white' />
                        <DatePickerWIthLabel label={"Invoice date: "} background='bg-white' />
                        <InputWithLabel label={"ISBN: "} background='bg-white' onChange={handleChange} />
                        <InputWithLabel label={"Reference: "} background='bg-white' />
                        <DatePickerWIthLabel label={"Date Payment: "} background='bg-white' />
                    </div>

                    {/* Book Details */}
                    <div className="grid gap-4 pr-4">
                        <div className='flex gap-4'>
                            <SelectInputWithLabel label={'Days'} />
                            <SelectInputWithLabel label={'Add New'} />
                        </div>
                        <DatePickerWIthLabel label={"Due date: "} background='bg-white' />
                        <DatePickerWIthLabel label={"REF: "} background='bg-white' />
                        <SelectInputWithLabel label={'Home Sale/ Foreign Sale:'} />
                        <SelectInputWithLabel label={"Sale Type:"} background='bg-white' edit={true} onClick={() => setIsModalOpen(true)} />
                    </div>


                </div>
            </div>

            <div>
                <label className="block mb-1 font-bold text-xl">Book Sale:</label>
                <div className='grid grid-cols-2 py-4 my-2 shadow p-4'>
                    <div className="grid gap-4 pr-4">
                        <SelectInputWithLabel label={'Price:'} />
                        <SelectInputWithLabel label={'Quantity:'} />
                        <SelectInputWithLabel label={'Discount:'} edit={true} onClick={() => setIsModalOpen(true)} />
                        <SelectInputWithLabel label={'P&P:'} />
                    </div>

                    <div className="grid gap-4 pr-4">
                        <label className="block mb-1 font-bold text-xl">Amount:</label>
                        <SearchField background='bg-white' />
                        <SearchField background='bg-white' />
                        <SelectInputWithLabel label={'Sub-Total:'} />
                        <SearchField background='bg-white' />
                    </div>
                </div>

            </div>

            <div>
                <label className="block mb-1 font-bold text-xl">Book Sale:</label>
                <div className='grid grid-cols-2 py-4 my-2 shadow p-4'>
                    <div className="grid gap-4 pr-4">
                        <SelectInputWithLabel label={'Payment details'} edit={true} onClick={() => setIsModalOpen(true)} />
                    </div>

                    <div className="grid gap-4 pr-4">
                        <SelectInputWithLabel label={'NET'} />
                        <SelectInputWithLabel label={'VAT'} edit={true} />
                        <SearchField background='bg-white' />
                        <InputWithLabel label={'TOTAL:'} background='bg-white' />
                    </div>
                </div>
            </div>

            <div className='flex p-4 px-6 shadow gap-6 text-md'>
                <div className='text-md font-semibold w-full'>
                    <h3 className="font-bold mb-2 text-xl">REMITTANCE ADVICE</h3>
                    <p className="mb-2">Please make cheque payable to <span className='underline'>Ashwell Publishing LTD </span> </p>
                    <InputWithLabel label={'Please ensure we receive your remittance with this section before '} background='bg-white' />
                    <p className="my-2">To pay by credit/debit card please call: <span className='underline'> 0203 755 3166 </span> </p>
                    <p className="mb-2"> Payment Details : <span className='underline'>Paid By Cheque </span> </p>
                    <p className='mt-6 text-red-500 font-normal italic'>Olympia Publishers, Tallis House, 2 Tallis Street, London, EC4Y 0AB, United Kingdom</p>
                </div>
                <div className=' w-full space-y-3 text-md'>
                    <p className='font-bold text-lg'>Our Bank Details</p>
                    <p>Lloyds Bank</p>
                    <p>Sort Code : 30-13-55</p>
                    <p>Acc No : 00119908</p>
                    <p>BIC: LOYDGB21035</p>
                    <p>IBAN: GB03 LOYD 3013 5500 1199 08</p>
                    <p>Address: 1 Legg Street, Chelmsford, CM1 1JS, Essex, UK</p>
                </div>
            </div>

            <div className='flex p-4 px-6 shadow gap-6'>
                <InputWithLabel label={"REF:"} background='bg-white' />
                <InputWithLabel label={"ISBN: "} background='bg-white' />
                <InputWithLabel label={"Invoice No: "} background='bg-white' />
                <InputWithLabel label={"Amount: "} background='bg-white' placeholder={"£"} />
            </div>

            <EditListModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                options={options}
                setOptions={setOptions}
            />
        </div>
    );
};

export default ViewInvoice;

