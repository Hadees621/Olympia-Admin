import Button from 'components/Button';
import React, { useState } from 'react';

const InvoiceCreator = () => {
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

    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const newServices = [...invoiceData.services];
        newServices[index][name] = value;
        setInvoiceData({ ...invoiceData, services: newServices });
    };

    return (
        <div className="p-6 font-sans">
            <div className='flex justify-between'>
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold">Invoice</h2>
                </div>

                <div>
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
            </div>

            <div className="mb-6 flex gap-4">
                <p className='font-bold'>To: </p>
                <div>
                    <p className=''> Mr. Martin Bulger</p>
                    <p>Test2</p>
                    <p>TES2</p>
                    <p>Cambridge12</p>
                    <p>Cam2</p>
                    <p>United Kingdom</p>
                    <p>CB1 4HG</p>
                </div>
            </div>

            {isEditing ? (
                <div className="mb-6 border p-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>Invoice Date:</label>
                            <input
                                type="date"
                                name="invoiceDate"
                                value={invoiceData.invoiceDate}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                        </div>
                        <div>
                            <label>Terms Days</label>
                            <select
                                name="termsDays"
                                value={invoiceData.termsDays}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            >
                                <option value="">Select Terms Days</option>
                                <option value="30">30 Days</option>
                                <option value="60">60 Days</option>
                                <option value="90">90 Days</option>
                            </select>
                        </div>
                        <div>
                            <label>Contract Invoice No:</label>
                            <input
                                type="text"
                                name="contractInvoiceNo"
                                value={invoiceData.contractInvoiceNo}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                        </div>
                        <div>
                            <label>Due Date:</label>
                            <input
                                type="date"
                                name="dueDate"
                                value={invoiceData.dueDate}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                        </div>
                        <div>
                            <label>REF:</label>
                            <input
                                type="text"
                                name="ref"
                                value={invoiceData.ref}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                        </div>
                        <div>
                            <label>ISBN:</label>
                            <input
                                type="text"
                                name="isbn"
                                value={invoiceData.isbn}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                        </div>
                        <div>
                            <label>Author:</label>
                            <input
                                type="text"
                                name="author"
                                value={invoiceData.author}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                        </div>
                        <div>
                            <label>Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={invoiceData.title}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mb-6 border p-4">
                    <p><strong>Invoice Date:</strong> {invoiceData.invoiceDate}</p>
                    <p><strong>Terms Days:</strong> {invoiceData.termsDays}</p>
                    <p><strong>Contract Invoice No:</strong> {invoiceData.contractInvoiceNo}</p>
                    <p><strong>Due Date:</strong> {invoiceData.dueDate}</p>
                    <p><strong>REF:</strong> {invoiceData.ref}</p>
                    <p><strong>ISBN:</strong> {invoiceData.isbn}</p>
                    <p><strong>Author:</strong> {invoiceData.author}</p>
                    <p><strong>Title:</strong> {invoiceData.title}</p>
                </div>
            )}

            <div className="mb-6">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2 text-left">Services</th>
                            <th className="border px-4 py-2 text-left">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoiceData.services.map((service, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">
                                    <p>{service.description}</p>
                                    {isEditing && (
                                        <input
                                            type="text"
                                            name="penName"
                                            value={service.penName}
                                            onChange={(e) => handleServiceChange(e, index)}
                                            className="border w-full px-2 py-1"
                                        />
                                    )}
                                </td>
                                <td className="border px-4 py-2">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="amount"
                                            value={service.amount}
                                            onChange={(e) => handleServiceChange(e, index)}
                                            className="border w-full px-2 py-1"
                                        />
                                    ) : (
                                        <p>{service.amount}</p>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isEditing ? (
                <>
                    <p className='font-bold my-3 text-lg'>Payment Details: </p>
                    <div className="mb-6 border p-4 grid grid-cols-2 gap-3">
                        <div>
                            <label>Mode of payment:</label>
                            <select
                                name="paymentMethod"
                                value={invoiceData.paymentMethod}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            >
                                <option value="">Select Mode Of Payment</option>
                                <option value="30">30 Days</option>
                                <option value="60">60 Days</option>
                                <option value="90">90 Days</option>
                            </select>
                            <div className="my-3">
                                <Button title={"Edit"} />
                            </div>
                        </div>
                        <div>
                            <label>Date Payment:</label>
                            <input
                                type="date"
                                name="paymentDate"
                                value={invoiceData.paymentDate}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                            <div className="my-3">
                                <Button title={"Edit"} />
                            </div>
                        </div>
                        <div>
                            <label>NET:</label>
                            <input
                                type="text"
                                name="net"
                                value={invoiceData.net}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                        </div>
                        <div>
                            <label>VAT:</label>
                            <input
                                type="text"
                                name="vat"
                                value={invoiceData.vat}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                        </div>
                        <div>
                            <label>Total:</label>
                            <input
                                type="text"
                                name="total"
                                value={invoiceData.total}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                        </div>
                    </div>
                </>
            ) : (
                <div className="mb-6 border p-4">
                    <p><strong>Mode of payment:</strong> {invoiceData.paymentMethod}</p>
                    <p><strong>Date Payment:</strong> {invoiceData.paymentDate}</p>
                    <p><strong>NET:</strong> {invoiceData.net}</p>
                    <p><strong>VAT:</strong> {invoiceData.vat}</p>
                    <p><strong>Total:</strong> {invoiceData.total}</p>
                </div>
            )}

            {isEditing ? (
                <>
                    <p className="font-bold my-3 text-lg">Remittance Advice</p>
                    <div className="mb-6 border p-4">
                        <p>Please make cheque payable to <strong>Ashwell Publishing LTD</strong></p>
                        <p><strong>Our Bank Details</strong></p>
                        <p>Lloyds Bank</p>
                        <p>Sort Code: 30-13-55</p>
                        <p>Acc No: 00119908</p>
                        <p>BIC: LOYDGB21035</p>
                        <p>IBAN: GB03 LOYD 3013 5500 1199 08</p>
                        <p><strong>Address:</strong> 95-97, Regent St, Gonville Place, Cambridge, Cambridgeshire, CB2 1BQ</p>
                        <p>Please ensure we receive your remittance with this section before
                            <input
                                type="text"
                                name="remittanceInput"
                                value={invoiceData.remittanceInput}
                                onChange={handleChange}
                                className="border px-2 py-1 ml-2"
                                placeholder="Enter additional info"
                            />
                        </p>
                        <p>To pay by credit/debit card please call: 0203 755 3166</p>
                    </div>
                </>
            ) : (
                <div className="mb-6 border p-4">
                    <p><strong className='text-2xl font-bold'>Remittance Advice</strong></p>
                    <p>Please make cheque payable to <strong>Ashwell Publishing LTD</strong></p>
                    <p><strong>Our Bank Details</strong></p>
                    <p>Lloyds Bank</p>
                    <p>Sort Code: 30-13-55</p>
                    <p>Acc No: 00119908</p>
                    <p>BIC: LOYDGB21035</p>
                    <p>IBAN: GB03 LOYD 3013 5500 1199 08</p>
                    <p><strong>Address:</strong> 95-97, Regent St, Gonville Place, Cambridge, Cambridgeshire, CB2 1BQ</p>
                    <p>Please ensure we receive your remittance with this section before:
                        <span className="ml-2">{invoiceData.remittanceInput}</span>
                    </p>
                    <p>To pay by credit/debit card please call: 0203 755 3166</p>
                </div>
            )}

            {isEditing ? (
                <div className="mb-6 border p-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>Contract Invoice No:</label>
                            <input
                                type="date"
                                name="invoiceDate"
                                value={invoiceData.invoiceDate}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                        </div>
                        <div>
                            <label>Amount: </label>
                            <input
                                type="text"
                                name="contractInvoiceNo"
                                value={invoiceData.contractInvoiceNo}
                                onChange={handleChange}
                                className="border w-full px-2 py-1"
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mb-6 border p-4">
                    <p><strong>Contract Invoice No:</strong> {invoiceData.contractInvoiceNo}</p>
                    <p><strong>Amount:</strong> {invoiceData.title}</p>
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

export default InvoiceCreator;
