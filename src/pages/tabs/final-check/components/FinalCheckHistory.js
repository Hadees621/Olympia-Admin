import React from "react";

const FinalCheckHistory = ({ history }) => {

    return (
        <div className="pt-4">
            <h2 className="text-xl mb-4 font-bold">Final check history</h2>
            <table className="min-w-full border-collapse block md:table">
                <thead className="block md:table-header-group">
                    <tr className="border border-gray-300 md:border-none block md:table-row">
                        <th className="bg-gray-100 p-2 text-left md:table-cell">Date</th>
                        <th className="bg-gray-100 p-2 text-left md:table-cell">Checked by</th>
                        <th className="bg-gray-100 p-2 text-left md:table-cell">Action</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-group">
                    {history.length > 0 ? (
                        history.map((entry, index) => (
                            <tr key={index} className="border border-gray-300 md:border-none block md:table-row">
                                <td className="p-2 md:table-cell border">{entry.date}</td>
                                <td className="p-2 md:table-cell border">{entry.checkedBy}</td>
                                <td className="p-2 md:table-cell border">{entry.action}</td>
                            </tr>
                        ))
                    ) : (
                        <tr className="border border-gray-300 md:border-none block md:table-row">
                            <td className="p-2 md:table-cell text-red-500" colSpan="3">No data found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FinalCheckHistory;
