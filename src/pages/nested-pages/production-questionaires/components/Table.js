import React from 'react'
import TableButton from 'components/TableButton'
import { reminderData } from '../../publicity-questionaires/utils/utils'

const Table = () => {
    return (
        <div>
            <p className='font-bold text-xl text-end m-5'> Total : 77 </p>

            <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
                <div className="min-w-full table-fixed divide-y divide-gray-200">
                    <table className="min-w-full table-fixed divide-y divide-gray-200">
                        <thead className="uppercase bg-gray-50 sticky top-0 z-10">
                            <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                                <th className="px-6 py-3">Record Date</th>
                                <th className="px-6 py-3">Author</th>
                                <th className="px-6 py-3">Book Title</th>
                                <th className="px-6 py-3">Reminder Date/Sent</th>
                                <th className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reminderData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row"
                                >
                                    <td className="px-6 py-4">{row.recordDate}</td>
                                    <td className="px-6 py-4">{row.author}</td>
                                    <td className="px-6 py-4">{row.bookTitle}</td>
                                    <td className="px-6 py-4">{row.reminderDateSent}</td>
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