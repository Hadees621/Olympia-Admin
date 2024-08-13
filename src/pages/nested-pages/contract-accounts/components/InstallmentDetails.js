import React from 'react'
import Button from 'components/Button'
import SelectField from 'components/SelectField'
import TableButton from 'components/TableButton'
import SearchField from 'pages/home/components/SearchField'

const InstallmentDetails = ({ data }) => {
    return (
        <div> <div className='mt-8'>
            <p className="text-2xl font-semibold my-4">
                Installments Details
            </p>
            <div className="flex items-center justify-end my-4 gap-3">
                <div className='w-[45%] flex gap-3 items-center'>
                    <p className="text-md font-semibold text-gray-500"> Payment Method : </p>
                    <SelectField />
                    <Button title="Add New Installment" />
                </div>
            </div>
            <div className="overflow-x-auto shadow-md transition-all duration-300">
                <table className="w-full text-sm text-left max-h-[500px]">
                    <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                        <tr className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap">
                            <th className="px-6 py-3 border">Installments</th>
                            <th className="px-6 py-3 border">Due Date</th>
                            <th className="px-6 py-3 border">Invoice Number</th>
                            <th className="px-6 py-3 border">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr
                                key={index}
                                className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap`}
                            >
                                <td className="px-6 py-4 flex items-center gap-4">
                                    <span> £ </span>   <SearchField background={"bg-white"} />
                                </td>
                                <td className="px-6 py-4 border ">
                                    <SearchField background={"bg-white"} />
                                </td>
                                <td className="px-6 py-4 border">
                                    <SearchField background={"bg-white"} />
                                </td>
                                <td className="px-6 py-4 border">
                                    <TableButton title="Delete" bg="bg-red-600" hover='hover:bg-red-700' text="text-white" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div></div>
    )
}

export default InstallmentDetails