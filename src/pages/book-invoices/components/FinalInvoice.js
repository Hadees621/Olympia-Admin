import React from 'react';

const FinalInvoice = ({ invoiceData }) => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="p-4 shadow">
            <div className="grid grid-cols-2 gap-4">
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
                <div>
                    <p><strong>Ship to:</strong></p>
                    <p>{invoiceData.shipTo}</p>
                    <div className='flex items-center gap-2'>
                        <input type='checkbox' checked={invoiceData.sameAsInvoiceAddress} readOnly />
                        <label className="block mb-1">Same as Invoice Address</label>
                    </div>
                </div>
                <div>
                    <p><strong>To:</strong></p>
                    <p>{invoiceData.to}</p>
                    <textarea className='w-full shadow' rows={4} defaultValue={invoiceData.messageTo} readOnly />
                </div>
            </div>

            <div className='grid grid-cols-3 py-4 my-2'>
                <div className="grid gap-4 pr-4">
                    <p><strong>Book Title:</strong> {invoiceData.bookTitle}</p>
                    <p><strong>Author:</strong> {invoiceData.author}</p>
                    <p><strong>ISBN:</strong> {invoiceData.isbn}</p>
                </div>
                <div className="grid gap-4 pr-4">
                    <p><strong>Invoice Number:</strong> {invoiceData.invoiceNumber}</p>
                    <p><strong>Reference:</strong> {invoiceData.reference}</p>
                    <p><strong>Sale Type:</strong> {invoiceData.saleType}</p>
                </div>
                <div className="grid gap-4 items-end">
                    <p><strong>Invoice date:</strong> {invoiceData.invoiceDate}</p>
                    <p><strong>Due date:</strong> {invoiceData.dueDate}</p>
                    <p><strong>H/F:</strong> {invoiceData.hf}</p>
                    <button onClick={handlePrint} className="bg-blue-500 text-white p-2 rounded">Print Invoice</button>
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
                        <p><strong>Price:</strong> £{invoiceData.price}</p>
                        <p><strong>Quantity:</strong> {invoiceData.quantity}</p>
                        <p><strong>Amount:</strong> £{invoiceData.amount}</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 p-4 shadow'>
                <div>
                    <p className='font-bold text-xl mb-4'>Terms</p>
                    <div className="space-y-2 pr-4">
                        <div className="grid gap-4">
                            <div className='flex gap-4'>
                                <p><strong>Days:</strong> {invoiceData.terms.days}</p>
                                <p><strong>Add New:</strong> {invoiceData.terms.addNew}</p>
                            </div>
                            <div>
                                <p><strong>Payment Method:</strong> {invoiceData.terms.paymentMethod}</p>
                            </div>
                            <div>
                                <p><strong>Payment Date:</strong> {invoiceData.terms.paymentDate}</p>
                            </div>
                            <div>
                                <p><strong>Shipped Status:</strong> {invoiceData.terms.shippedStatus}</p>
                            </div>
                            <div>
                                <p><strong>Shipped Date:</strong> {invoiceData.terms.shippedDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 pt-4">
                    <div className='space-y-2'>
                        <p><strong>Discount:</strong> £{invoiceData.discount}</p>
                    </div>
                    <div>
                        <p><strong>Subtotal:</strong> £{invoiceData.subtotal}</p>
                    </div>
                    <div>
                        <p><strong>P&P:</strong> £{invoiceData.pnp}</p>
                    </div>
                    <div>
                        <p><strong>Net:</strong> £{invoiceData.net}</p>
                    </div>
                    <div className='space-y-2'>
                        <p><strong>VAT:</strong> £{invoiceData.vat}</p>
                    </div>
                    <div>
                        <p><strong>Total:</strong> £{invoiceData.total}</p>
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
                    <p><strong>ISBN:</strong> {invoiceData.isbn}</p>
                    <p><strong>Invoice number:</strong> {invoiceData.invoiceNumber}</p>
                    <p><strong>Amount:</strong> £{invoiceData.amount}</p>
                    <p className='text-end mt-6 text-red-500 italic'>VAT: 102471656</p>
                </div>
            </div>
        </div>
    );
};

export default FinalInvoice;
