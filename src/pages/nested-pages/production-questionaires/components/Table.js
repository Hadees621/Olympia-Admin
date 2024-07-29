import React from 'react'
import TableButton from 'components/TableButton'
import { reminderData } from '../../publicity-questionaires/utils/utils'

const Table = () => {
    return (
        <div>
            <p className='font-bold text-xl text-end m-5'> Total : 77 </p>
            <div className="overflow-x-auto mt-5 text-center shadow">
                <div className="max-h-[400px] overflow-y-auto">
                    <table className="min-w-full table-fixed divide-y divide-gray-200">
                        <thead className="bg-gray-50 sticky top-0 z-10">
                            <tr className="text-sm w-full font-medium text-gray-500 uppercase">
                                <th className="p-3 w-1/6">Record Date</th>
                                <th className="p-3 w-1/6">Author</th>
                                <th className="p-3 w-1/6">Book Title</th>
                                <th className="p-3 w-1/6">Reminder Date/Sent</th>
                                <th className="p-3 w-1/6">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reminderData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap"
                                >
                                    <td className="px-6 py-4 border">{row.recordDate}</td>
                                    <td className="px-6 py-4 border">{row.author}</td>
                                    <td className="px-6 py-4 border">{row.bookTitle}</td>
                                    <td className="px-6 py-4 border">{row.reminderDateSent}</td>
                                    <td className="px-6 py-4 flex gap-x-2 justify-center">
                                        <TableButton title={"ReSend Reminder to Author"} />
                                        <TableButton title={"View"} href={"/pending-questionnaires-form"} />
                                        <TableButton title={"X"} bg="bg-red-500" text="text-white" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <p className='font-bold text-xl text-start m-5'> Total Records: {reminderData.length}</p>
        </div>
    )
}

export default Table