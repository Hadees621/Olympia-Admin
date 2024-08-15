import React from 'react';
import Button from 'components/Button';

const AuthorPaymentSummary = () => {
    const handlePrint = () => {
        document.getElementById('action-buttons').style.display = 'none';
        window.print();
        document.getElementById('action-buttons').style.display = 'flex';
    };

    return (
        <div className="p-6 font-sans">
            <h2 className="text-center text-xl font-semibold text-blue-500 mb-6">Olympia Publishers</h2>

            <div className="mb-6">
                <p>Mr. Martin Bulger</p>
                <p>Test2</p>
                <p>TES2</p>
                <p>Cambridge12</p>
                <p>Cam2</p>
                <p>United Kingdom</p>
                <p>CB1 4HG</p>
            </div>

            <div className="mb-6">
                <p><strong>Pen Name:</strong> Martin Bulger</p>
                <p><strong>Book Title:</strong> Living Makes You Run Longer</p>
            </div>

            <table className="w-full border-collapse mb-6">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Invoice No.</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Amount Invoiced</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Amount Paid</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Payment Method</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Payment Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">10-02-2021</td>
                        <td className="border border-gray-300 px-4 py-2">126</td>
                        <td className="border border-gray-300 px-4 py-2">£ 966.67</td>
                        <td className="border border-gray-300 px-4 py-2">£ 966.67</td>
                        <td className="border border-gray-300 px-4 py-2">paid by cheque</td>
                        <td className="border border-gray-300 px-4 py-2">01-01-1970</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">07-03-2008</td>
                        <td className="border border-gray-300 px-4 py-2">143</td>
                        <td className="border border-gray-300 px-4 py-2">£ 966.67</td>
                        <td className="border border-gray-300 px-4 py-2">£ 966.67</td>
                        <td className="border border-gray-300 px-4 py-2">paid by cheque</td>
                        <td className="border border-gray-300 px-4 py-2">31-03-2008</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">06-06-2008</td>
                        <td className="border border-gray-300 px-4 py-2">171</td>
                        <td className="border border-gray-300 px-4 py-2">£ 766.66</td>
                        <td className="border border-gray-300 px-4 py-2">£ 766.66</td>
                        <td className="border border-gray-300 px-4 py-2">paid by Xero</td>
                        <td className="border border-gray-300 px-4 py-2">06-06-2008</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">06-06-2008</td>
                        <td className="border border-gray-300 px-4 py-2">8801</td>
                        <td className="border border-gray-300 px-4 py-2">£ 766.00</td>
                        <td className="border border-gray-300 px-4 py-2">£ 0.00</td>
                        <td className="border border-gray-300 px-4 py-2">paid by cheque</td>
                        <td className="border border-gray-300 px-4 py-2">00-00-0000</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">12-06-2024</td>
                        <td className="border border-gray-300 px-4 py-2">22095</td>
                        <td className="border border-gray-300 px-4 py-2">£ 50.00</td>
                        <td className="border border-gray-300 px-4 py-2">£ 0.00</td>
                        <td className="border border-gray-300 px-4 py-2">paid by cheque</td>
                        <td className="border border-gray-300 px-4 py-2">22-07-2008</td>
                    </tr>
                </tbody>
            </table>

            <div className="mb-6">
                <p><strong>Total Contract Amount:</strong> £ 2900.00</p>
                <p><strong>Total VAT:</strong> £ 0.00</p>
                <p><strong>Paid on Previous Invoices:</strong> £</p>
                <p><strong>Paid on These Invoices:</strong> £ 2700.00</p>
                <p><strong>Total Amount Paid:</strong> £ 2700.00</p>
                <p><strong>Total Outstanding:</strong> £ 200.00</p>
            </div>

            <div id="action-buttons" className="flex justify-end space-x-4">
                <Button
                    title={"Print"}
                    bg='bg-blue-500 hover:bg-blue-600'
                    onClick={handlePrint}
                    text={"text-white"}
                />
            </div>
        </div>
    );
};

export default AuthorPaymentSummary;
