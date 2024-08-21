import React from 'react'
import Title from 'components/Title';
import { reminderData } from './utils/utils';
import TableButton from 'components/TableButton';

const PublicityQuestionaires = () => {
    return (
        <div className="w-full text-start items-center m-4">
            <Title title='Pending Publicity questionnaires' />

            <div className="mt-4 overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
                <table className="min-w-full table-fixed divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                        <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                            <th className="px-6 py-4">Record Date</th>
                            <th className="px-6 py-4">Author</th>
                            <th className="px-6 py-4">Book Title</th>
                            <th className="px-6 py-4">Reminder Date/Sent</th>
                            <th className="px-6 py-4">Actions</th>
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
                                    <TableButton title={"Send Reminder to Author"} bg='bg-green-600' hover='hover:bg-green-700' text={'text-white'} />
                                    <TableButton title={"View"} href={"/publicity-questionnaire-form"} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PublicityQuestionaires