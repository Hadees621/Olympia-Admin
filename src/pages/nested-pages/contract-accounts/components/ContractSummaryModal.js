import React from 'react';
import Button from 'components/Button';

const ContractSummaryModal = () => {
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
                <p>Cambridge12</p>
                <p>Cam2</p>
                <p>CB1 4HG</p>
            </div>

            <div className="mb-6">
                <p>15th August 2024</p>
            </div>

            <div className="mb-6">
                <p><strong>Pen Name:</strong> Martin Bulger</p>
                <p><strong>Book Title:</strong> Living Makes You Run Longer</p>
            </div>

            <table className="w-full border-collapse mb-6">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Advance Contract Amount</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Advance Contract Amount Paid</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">00-00-0000</td>
                        <td className="border border-gray-300 px-4 py-2">£ 0.00</td>
                        <td className="border border-gray-300 px-4 py-2">£ 0.00</td>
                    </tr>
                </tbody>
            </table>

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

export default ContractSummaryModal;
