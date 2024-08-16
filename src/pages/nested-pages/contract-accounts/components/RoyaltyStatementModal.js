import Button from 'components/Button';
import React, { useState } from 'react';

const RoyaltyStatementModal = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [invoiceData, setInvoiceData] = useState({
        invoiceDate: '',
        contractInvoiceNo: '',
        dueDate: '',
        ref: '',
        author: 'Martin Bulger',
        title: 'Living Makes You Run Longer',
        services: [
            { description: 'Publication of Living Makes You Run Longer', penName: 'Martin Bulger', amount: '' }
        ],
        paymentMethod: '',
        net: '',
        vat: '',
        total: '',
        paymentDetails: {
            author: 'Martin Bulger',
            contractInvoiceNo: '',
            amount: '',
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoiceData({
            ...invoiceData,
            [name]: value
        });
    };

    return (
        <div className="px-6 font-sans">
            <div className='flex justify-between'>
                <div>
                    <a href="/">
                        <img
                            src="/assets/logo.png"
                            alt="logo"
                            className="w-[190px] align-middle py-2"
                        />
                    </a>
                    <h1>Ashwell Publishing LTD</h1>
                    <p>T/A Olympia Publishers</p>
                    <address>
                        Tallis House<br />
                        2 Tallis Street<br />
                        London<br />
                        EC4Y 0AB<br />
                        UK
                    </address>
                    <ul>
                        <li><strong>Tel:</strong> <a href="tel:+442037553166">0203 755 3166</a></li>
                        <li><strong>Email:</strong> <a href="mailto:accounts@olympiapublishers.com">accounts@olympiapublishers.com</a></li>
                        <li><strong>VAT:</strong> 102471656</li>
                    </ul>
                </div>
                <div className="mb-6 grid gap-4 items-center">
                    <div>
                        <p> Mr. Martin Bulger</p>
                        <p>Test2</p>
                        <p>TES2</p>
                        <p>Cambridge12</p>
                        <p>Cam2</p>
                        <p>United Kingdom</p>
                        <p>CB1 4HG</p>
                    </div>
                </div>
            </div>

            <h1 className='text-2xl font-semibold mt-5'>Royalty Statement for Author</h1>
            <div className='flex '>
                <div className='border p-5 my-5 w-full'>
                    <p><strong>Author Name:</strong> Mr. Bulger Martin </p>
                    <p><strong>Book Title:</strong> Living Makes You Run Longer</p>
                    <p><strong>ISBN:</strong> 978-1-90 5513-51-2</p>
                    <p><strong>Publication Date:</strong> 04-07-2008</p>
                    <p><strong>Book Price:</strong> £ 7.99</p>
                </div>
                <div className='border p-5 my-5 w-full'>
                    <p className='font-bold text-lg'> Royalty Information</p>
                    <p><strong>Home Sale:</strong> 20% </p>
                    <p><strong>Foreign Sale:</strong> 12%</p>
                    <p><strong>ISBN:</strong> 0%</p>
                </div>
            </div>

            {isEditing ? (
                <div className="mb-6 border p-4 mt-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div className='space-y-3'>
                            <div>
                                <label>Royalty Payment Date:</label>
                                <input
                                    type="date"
                                    name="invoiceDate"
                                    value={invoiceData.invoiceDate}
                                    onChange={handleChange}
                                    className="border w-full px-2 py-1"
                                />
                            </div>
                            <div>
                                <label>Amount for This Time Period:</label>
                                <div className='flex gap-2 items-center'>
                                    <span>£</span>
                                    <input
                                        type="text"
                                        name="contractInvoiceNo"
                                        value={invoiceData.contractInvoiceNo}
                                        onChange={handleChange}
                                        className="border w-full px-2 py-1"
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Total Amount Owed:</label>
                                <div className='flex gap-2 items-center'>
                                    <span>£</span>
                                    <input
                                        type="text"
                                        name="dueDate"
                                        value={invoiceData.dueDate}
                                        onChange={handleChange}
                                        className="border w-full px-2 py-1"
                                    />
                                </div>
                            </div>
                            <div className='my-3 mx-auto py-2 flex justify-end'>
                                <Button title={"Issue"} />
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div>
                                <label>Select Year</label>
                                <select
                                    name="paymentMethod"
                                    value={invoiceData.paymentMethod}
                                    onChange={handleChange}
                                    className="border w-full px-2 py-1"
                                >
                                    <option value="">Select Year</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                            <div>
                                <label>Select Session</label>
                                <select
                                    name="paymentMethod"
                                    value={invoiceData.paymentMethod}
                                    onChange={handleChange}
                                    className="border w-full px-2 py-1"
                                >
                                    <option value="">Select Session</option>
                                    <option value="Spring">Spring</option>
                                    <option value="Summer">Summer</option>
                                    <option value="Fall">Fall</option>
                                    <option value="Winter">Winter</option>
                                </select>
                            </div>
                            <div className='my-3 mx-auto py-2 flex justify-end'>
                                <Button title={"Go"} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mb-6 border p-4 my-5">
                    <p><strong>Royalty Payment Date:</strong> {invoiceData.invoiceDate}</p>
                    <p><strong>Amount for This Time Period:</strong> £{invoiceData.contractInvoiceNo}</p>
                    <p><strong>Total Amount Owed:</strong> £{invoiceData.dueDate}</p>
                    <p><strong>Select Year:</strong> {invoiceData.paymentMethod}</p>
                    <p><strong>Select Session:</strong> {invoiceData.paymentMethod}</p>
                </div>
            )}

            <div className="flex justify-end space-x-4">
                {isEditing ? (
                    <button
                        onClick={() => setIsEditing(false)}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                ) : (
                    <>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => window.print()}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Print
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default RoyaltyStatementModal;

