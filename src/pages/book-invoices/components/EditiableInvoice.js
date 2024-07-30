import Button from 'components/Button';
import React, { useState } from 'react';
import DisplayField from 'components/DisplayField';
import InputWithLabel from 'components/InputWithLabel';
import EditableTextarea from 'components/EditableTextarea';
import SearchField from 'pages/home/components/SearchField';
import EditableTextInput from 'components/EditableTextInput';
import DatePickerWIthLabel from 'components/DatePickerWIthLabel';
import SelectInputWithLabel from 'components/SelectInputWithLabel';
import EditListModal from 'components/modals/EditListModal';
const EditableInvoice = ({ initialData, onSave }) => {
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
                <div className="grid grid-cols-2 gap-4 ">
                    <div>
                        <EditableTextarea label={"Ship to:"} rows={5} />
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' />
                            <label className="block mb-1">Same as Invoice Address</label>
                        </div>
                    </div>
                    <div>
                        <SelectInputWithLabel label={"To:"} />
                        <textarea className='w-full shadow' rows={4} />
                    </div>
                </div>
                <div className='grid grid-cols-3 py-4 my-2'>
                    {/* Book Details */}
                    <div className="grid gap-4 pr-4">
                        <InputWithLabel label={"Book Title: "} background='bg-white' />
                        <InputWithLabel label={"Author: "} background='bg-white' value={invoiceData.author} onChange={handleChange} />
                        <InputWithLabel label={"ISBN: "} background='bg-white' value={invoiceData.author} onChange={handleChange} />
                    </div>

                    {/* Additional Details */}
                    <div className="grid gap-4 pr-4">
                        <InputWithLabel label={"Invoice Number: "} background='bg-white' />
                        <InputWithLabel label={"Reference: "} background='bg-white' />
                        <SelectInputWithLabel label={"Sale Type:"} background='bg-white' edit={true} onClick={() => setIsModalOpen(true)} />
                    </div>

                    {/* Sales and Payment Details */}
                    <div className="grid gap-4 items-end">
                        <DatePickerWIthLabel label={"Invoice date: "} background='bg-white' />
                        <DatePickerWIthLabel label={"Due date: "} background='bg-white' />
                        <SelectInputWithLabel label={"H/F:"} background='bg-white' />
                        <Button title={"Create Royalty Statement"} />
                    </div>
                </div>
            </div>
            <div className="space-y-2 p-4 shadow">
                <label className="block mb-1 font-bold text-xl">Format:</label>
                <div className="flex gap-4">
                    <div className='text-md w-[20%] space-y-2'>
                        <p> The Marsh Man by Mark Vivian </p>
                        <p> PAPERBACK EDITION </p>
                        <p> 156X156MM (Square) </p>
                    </div>
                    <div className='flex gap-4 w-full'>
                        <InputWithLabel label={"Price: "} background='bg-white' placeholder={"£"} />
                        <InputWithLabel label={"Quantity: "} background='bg-white' />
                        <InputWithLabel label={"Amount: "} background='bg-white' placeholder={"£"} />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 p-4 shadow'>
                <div>
                    <p className='font-bold text-xl mb-4'>Terms</p>
                    <div className="space-y-2 pr-4">
                        <div className="grid gap-4">
                            <div className='flex gap-4'>
                                <SelectInputWithLabel label={'Days'} />
                                <SelectInputWithLabel label={'Add New'} />
                            </div>
                            <div>
                                <SelectInputWithLabel label={'Payment Method'} edit={true} onClick={() => setIsModalOpen(true)} />
                            </div>
                            <div>
                                <DatePickerWIthLabel label={"Payment Date:"} background='bg-white' />
                            </div>
                            <div>
                                <SelectInputWithLabel label={"Shipped Status:"} background='bg-white' />
                            </div>
                            <div>
                                <DatePickerWIthLabel label={"Shipped Date:"} background='bg-white' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 pt-4">
                    <div className='space-y-2'>
                        <SelectInputWithLabel label={"Discount:"} display={false} />
                        <SearchField placeholder={"£"} background='bg-white' />
                        <Button title={"Edit"} onClick={() => setIsModalOpen(true)} width={"mt-2"} />
                    </div>
                    <div>
                        <EditableTextInput label={"Subtotal:"} display={false} />
                    </div>
                    <div>
                        <EditableTextInput label={"P&P:"} display={false} />
                    </div>
                    <div>
                        <EditableTextInput label={"Net:"} display={false} />
                    </div>
                    <div className='space-y-2'>
                        <SelectInputWithLabel label={"VAT:"} display={false} />
                        <SearchField placeholder={"£"} background='bg-white' />
                        <Button title={"Edit"} onClick={() => setIsModalOpen(true)} width={"mt-2"} />
                    </div>
                    <div>
                        <EditableTextInput label={"Total:"} display={false} placeholder={"£"} />
                    </div>
                </div>
            </div>
            <div className='flex p-4 px-6 shadow'>
                <div className='text-md font-semibold w-[65%]'>
                    <h3 className="font-bold mb-2 text-xl">REMITTANCE ADVICE</h3>
                    <p className="mb-2">PAY BY BANK TRANSFER USING OUR BANK DETAILS BELOW</p>
                    <p>Lloyds Bank</p>
                    <p>Sort Code : 30-13-55</p>
                    <p>Acc No : 00119908</p>
                    <p>BIC: LOYDGB21035</p>
                    <p>IBAN: GB03 LOYD 3013 5500 1199 08</p>
                    <p>Address: 1 Legg Street, Chelmsford, CM1 1JS, Essex, UK</p>

                    <p className="mt-4 mb-2">PAY BY DEBIT/ CREDIT CARD</p>
                    <p>To pay by credit/ debit card call us on +44 (0)20 3719 5833.</p>

                    <p className="mt-4 mb-2">PAY BY CHEQUE (UK ONLY)</p>
                    <p>Please make cheque payable to Ashwell Publishing Ltd.</p>

                    <p className="mt-4 mb-2">PAY BY PAYPAL</p>
                    <p>Please make payment to our PayPal at accounts@olympiapublishers.com</p>

                    <p className="mt-4">Please ensure we receive your remittance with this section before the due date.</p>
                    <p>Interest will be charged on all overdue invoices at a rate of 1% per day.</p>

                    <p className='mt-6 text-red-500 font-normal italic'>Olympia Publishers, Tallis House, 2 Tallis Street, London, EC4Y 0AB, United Kingdom</p>
                </div>
                <div className='w-[40%] space-y-4'>
                    <p className='font-bold text-xl mb-4'>Terms</p>
                    <DisplayField label={"ISBN: "} value={"978-1-84897-028-1"} />
                    <DisplayField label={" Invoice number:"} value={"B61225"} />
                    <InputWithLabel label={"Amount: "} background='bg-white' placeholder={"£"} />
                    <p className='text-end mt-6 text-red-500 italic'>VAT: 102471656</p>

                </div>
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

export default EditableInvoice;
