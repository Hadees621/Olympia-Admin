import React from 'react'
import { reminderData } from './utils/utils';
import TableButton from 'components/TableButton';

const PublicityQuestionaires = () => {

    return (
        <div className="w-full text-start items-center m-4">
            {/* header */}
            <p className="text-3xl font-semibold mt-8 ml-8">
                Pending Publicity questionnaires
            </p>

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
                                        <TableButton title={"Send Reminder to Author"} bg='bg-green-600' text={'text-white'} />
                                        <TableButton title={"View"} href={"/publicity-questionnaire-form"} />
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

export default PublicityQuestionaires