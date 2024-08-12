import React from 'react'
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import { inputFields } from './utils/utls';
import useSidebarStore from 'stores/States';
import SelectField from 'components/SelectField';
import InputWithLabel from 'components/InputWithLabel';
import SearchField from 'pages/home/components/SearchField';
import EditableTextInput from 'components/EditableTextInput';
import EditableDatePicker from 'components/EditableDatePicker';

const ContractAccount = () => {
    const { isOpen } = useSidebarStore();

    const handleInputChange = (e) => {
        // Handle input change
    };

    return (
        <div className="w-full text-start items-center m-3">
            <p className="text-3xl font-semibold my-8 ml-4">
                Contract Account Section
            </p>
            <div
                className={`m-4 transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
                    }`}
            >
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                        {inputFields.map((field, index) => (
                            <InputWithLabel
                                key={index}
                                label={field.label}
                                placeholder={field.placeholder}
                                value={field.value}
                                onChange={handleInputChange}
                                background='bg-white'
                            />
                        ))}
                    </div>
                    <div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Royalty Information</h2>
                            <div className="shadow p-4">
                                {['Home Sale', 'Home Sale After 500', 'Home Sale After 5000', 'Foreign Sale', 'Foreign Sale After 5000', 'Ebooks', 'Audio Books'].map((item, index) => (
                                    <div key={index} className="flex items-center justify-between mb-2">
                                        <label className="w-1/2 text-md font-semibold">{item}:</label>
                                        <input type="number" className="w-1/2 border p-2 mr-3" defaultValue={0} />
                                        <span>£</span>
                                    </div>
                                ))}
                                <Button title={"Save"} bg='bg-green-500' hover='hover:bg-green-600' text={"text-white"} />
                            </div>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Account Notes</h2>
                            <textarea className="w-full border p-2 mb-3" rows="4" defaultValue="I have changed the account notes to this latest one."></textarea>
                            <Button title={"Save"} bg='bg-green-500' hover='hover:bg-green-600' text={"text-white"} />
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Author Account Details</h2>
                            <div className="flex items-center">
                                <input type="file" className="border p-2 mr-4" />
                                <Button title={"Upload"} bg='bg-orange-500' hover='hover:bg-orange-600' text={"text-white"} />
                            </div>
                            <p className="my-3">1619453698416473.pdf</p>
                            <div className='flex justify-between'>
                                <Button title={"Delete"} bg='bg-red-500' hover='hover:bg-red-600' text={"text-white"} />
                                <Link to={"/pending-publicity-questionnaire"} >
                                    <button className="ml-auto px-4 py-2 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded">
                                        Pending production questionnaire
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Payment Method for Royalties</h2>
                            <SelectField />
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Author Contract Payment Setup</h2>
                            <p>Author selected Other (member of accounts team will be in touch to discuss payment options)</p>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Author Receive Royalties Payment Method</h2>
                            <SelectField />
                            <div className="mt-2">Paypal email account: <SearchField background='bg-white' value={"zubair.signumconcepts@gmail.com"} /> </div>
                        </div>
                        <div className="mb-6">
                            <Button title={"Submit Now"} bg='bg-green-500' hover='hover:bg-green-600' text={"text-white"} />
                        </div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <h2 className="text-2xl font-bold mb-4">Contract Information</h2>
                    <div className="mb-6 grid grid-cols-2 shadow">
                        <div className="p-4 space-y-4">
                            {['Contract Amount', 'Total VAT', 'Total Amount', 'Amount Already Paid', 'Amount Paid', 'Amount Returned', 'Bad Debt', 'Remaining Amount'].map((item, index) => (
                                <EditableTextInput key={index} label={item} value="£0.00" />
                            ))}
                        </div>
                        <div className="p-4 space-y-4">
                            <EditableTextInput label={"Invoicing Email:"} value="wasif.signumconcepts@gmail.com" />
                            <EditableTextInput label={"Advance Contract Amount:"} value="£0.00" />
                            <div className='flex items-center gap-3'>
                                <EditableTextInput label={"Advance Contract Amount Paid:"} labelwidth='w-[150px]' value="£0.00" />
                                <EditableDatePicker background='bg-white' />
                            </div>
                            <div className='my-4 flex justify-end'>
                                <Button title={"Download Royalties List"} bg='bg-green-600' hover='hover:bg-green-700' text={"text-white"} />
                            </div>
                            <div className='my-4'>
                                <Button title={"Save"} bg='bg-green-500' hover='hover:bg-green-600' text={"text-white"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContractAccount