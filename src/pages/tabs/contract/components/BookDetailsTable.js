import React from 'react';

const BookDetailsTable = () => {
    return (
        <div className="p-4 border">
            <h1 className="text-center text-lg font-semibold text-blue-500">Olympia Publishers</h1>
            <table className="w-full border-collapse border border-gray-400 mt-4">
                <tbody>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">Pen Name:</td>
                        <td className="p-2">Martin Bulger</td>
                    </tr>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">Author Name:</td>
                        <td className="p-2">Mr. Martin Bulger</td>
                    </tr>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">Title:</td>
                        <td className="p-2">Living Makes You Run Longer</td>
                    </tr>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">Book No.:</td>
                        <td className="p-2">1</td>
                    </tr>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">Address:</td>
                        <td className="p-2">Test2<br />TES2<br />Cambridge12, Cam2<br />United Kingdom<br />CB1 4HG</td>
                    </tr>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">Email:</td>
                        <td className="p-2">zubair.ali@signumconcepts.com</td>
                    </tr>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">Web Address:</td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">Tel No.:</td>
                        <td className="p-2">07913 990769 (Home) (Mobile) 02392865029 (Mobile)</td>
                    </tr>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">ISBN:</td>
                        <td className="p-2">978-1-90 5513-51-2</td>
                    </tr>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">Price:</td>
                        <td className="p-2">7.99</td>
                    </tr>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">Date Contract:</td>
                        <td className="p-2">2007-09-27</td>
                    </tr>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">Date Publication:</td>
                        <td className="p-2">2008-07-04</td>
                    </tr>
                    <tr className="border border-gray-400">
                        <td className="p-2 font-semibold text-red-500">Notes:</td>
                        <td className="p-2">Wants it ready for the London marathon - early April</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BookDetailsTable;
