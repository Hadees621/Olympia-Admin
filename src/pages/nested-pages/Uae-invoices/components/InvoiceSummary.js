import React from 'react';
import Button from 'components/Button';

const InvoiceSummary = ({ totalInvoices, totalRevenue, totalPaid, totalRemaining }) => {
    return (
        <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold mb-4">Invoice Summary</h2>
            <div className="grid gap-4 w-[40%] mb-5">
                <div>
                    <span className="font-medium">Total Invoices:</span>
                    <span className="ml-2">{totalInvoices}</span>
                </div>
                <div>
                    <span className="font-medium">Total Revenue:</span>
                    <span className="ml-2">{totalRevenue}</span>
                </div>
                <div>
                    <span className="font-medium">Total Paid:</span>
                    <span className="ml-2">{totalPaid}</span>
                </div>
                <div>
                    <span className="font-medium">Total Remaining:</span>
                    <span className="ml-2">{totalRemaining}</span>
                </div>
            </div>

            <Button title={"Print"} />
        </div>
    );
};

export default InvoiceSummary;
