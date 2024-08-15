import React from 'react'
import Button from 'components/Button'
import TableButton from 'components/TableButton'
import SelectField from 'components/SelectField'

const RoyaltiesInformation = ({ data }) => {
    return (
        <div>
            <div className='mt-4'>
                <div className="flex items-center justify-between my-4 gap-3">
                    <p className="text-2xl font-semibold my-4">
                        Royalties Information
                    </p>
                    <Button title="Royalty Statement for Author" />
                </div>
                <div className="overflow-x-auto shadow-md transition-all duration-300 custom-scrollbarw">
                    <table className="w-full text-sm text-left max-h-[500px]">
                        <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                            <tr className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap">
                                <th className="px-6 py-3 border">View</th>
                                <th className="px-6 py-3 border">Email Statement</th>
                                <th className="px-6 py-3 border">	Duration</th>
                                <th className="px-6 py-3 border">	Issue Date</th>
                                <th className="px-6 py-3 border">Royalties Amount</th>
                                <th className="px-6 py-3 border">Broughtforward Amount</th>
                                <th className="px-6 py-3 border">Total Amount</th>
                                <th className="px-6 py-3 border">Issued</th>
                                <th className="px-6 py-3 border min-w-[180px]">Status</th>
                                <th className="px-6 py-3 border">Payment Date</th>
                                <th className="px-6 py-3 border">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap`}
                                >
                                    <td className="px-6 py-4 border">
                                        <TableButton title={"View"} />
                                    </td>
                                    <td className="px-6 py-4 border">
                                        <TableButton title={"Send Email"} />
                                    </td>
                                    <td className="px-6 py-4 border">{row.invoiceNo}</td>
                                    <td className="px-6 py-4 border">{row.cnNo}</td>
                                    <td className="px-6 py-4 border">{row.date}</td>
                                    <td className="px-6 py-4 border">{row.amount}</td>
                                    <td className="px-6 py-4 border">{row.dueDate}</td>
                                    <td className="px-6 py-4 border">{row.paymentDate}</td>
                                    <td className="px-6 py-4 border ">
                                        <SelectField />
                                    </td>
                                    <td className="px-6 py-4 border">{row.paymentMode}</td>
                                    <td className="px-6 py-4 border">
                                        <TableButton title="Delete" bg="bg-red-600" hover='hover:bg-red-700' text="text-white" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RoyaltiesInformation