import React from 'react'
import TableButton from 'components/TableButton'

const reminderData = [
    {
        recordDate: "26-07-2024",
        author: "Mr. Nazarulla Muhammed Buhari",
        bookTitle: "Humans Beneath",
        reminderDateSent: "00-00-0000 (0)",
        action: "Send Reminder to Author",
        view: "View"
    },
    {
        recordDate: "25-07-2024",
        author: "Miss. Nicola Friar",
        bookTitle: "Death in Angria",
        reminderDateSent: "00-00-0000 (0)",
        action: "Send Reminder to Author",
        view: "View"
    },
    {
        recordDate: "19-07-2024",
        author: "Mr. Chinamerem Anthony",
        bookTitle: "The Unique Teenager",
        reminderDateSent: "24-07-2024 (1)",
        action: "ReSend Reminder to Author",
        view: "View"
    },
    {
        recordDate: "01-07-2024",
        author: "Mr. Edgardo Samaniego",
        bookTitle: "The True Adam and Eve in the Garden of Eden",
        reminderDateSent: "26-07-2024 (5)",
        action: "ReSend Reminder to Author",
        view: "View"
    },
    {
        recordDate: "01-07-2024",
        author: "Mr. Takudzwa Mandaza",
        bookTitle: "Battling the Apparitions",
        reminderDateSent: "26-07-2024 (5)",
        action: "ReSend Reminder to Author",
        view: "View"
    },
    {
        recordDate: "21-06-2024",
        author: "Mr. Lawliet Lori",
        bookTitle: "AUM",
        reminderDateSent: "26-07-2024 (7)",
        action: "ReSend Reminder to Author",
        view: "View"
    },
    {
        recordDate: "21-05-2024",
        author: "Mr. Abdur Khan",
        bookTitle: "A Tale of Bengal",
        reminderDateSent: "25-07-2024 (13)",
        action: "ReSend Reminder to Author",
        view: "View"
    },
    {
        recordDate: "09-04-2024",
        author: "Ms. Ebonie Senior",
        bookTitle: "Karma Doesn't Work",
        reminderDateSent: "28-07-2024 (22)",
        action: "ReSend Reminder to Author",
        view: "View"
    },
    {
        recordDate: "25-03-2024",
        author: "Mr. Dennis VeseLove",
        bookTitle: "How to Get Rid of Negativity",
        reminderDateSent: "28-07-2024 (25)",
        view: "View"
    },
    {
        recordDate: "26-07-2024",
        author: "Mr. Nazarulla Muhammed Buhari",
        bookTitle: "Humans Beneath",
        reminderDateSent: "00-00-0000 (0)",
        action: "Send Reminder to Author",
        view: "View"
    },
    {
        recordDate: "25-07-2024",
        author: "Miss. Nicola Friar",
        bookTitle: "Death in Angria",
        reminderDateSent: "00-00-0000 (0)",
        action: "Send Reminder to Author",
        view: "View"
    },
    {
        recordDate: "19-07-2024",
        author: "Mr. Chinamerem Anthony",
        bookTitle: "The Unique Teenager",
        reminderDateSent: "24-07-2024 (1)",
        action: "ReSend Reminder to Author",
        view: "View"
    },
    {
        recordDate: "01-07-2024",
        author: "Mr. Edgardo Samaniego",
        bookTitle: "The True Adam and Eve in the Garden of Eden",
        reminderDateSent: "26-07-2024 (5)",
        action: "ReSend Reminder to Author",
        view: "View"
    },
    {
        recordDate: "01-07-2024",
        author: "Mr. Takudzwa Mandaza",
        bookTitle: "Battling the Apparitions",
        reminderDateSent: "26-07-2024 (5)",
        action: "ReSend Reminder to Author",
        view: "View"
    },
    {
        recordDate: "21-06-2024",
        author: "Mr. Lawliet Lori",
        bookTitle: "AUM",
        reminderDateSent: "26-07-2024 (7)",
        action: "ReSend Reminder to Author",
        view: "View"
    },
    {
        recordDate: "21-05-2024",
        author: "Mr. Abdur Khan",
        bookTitle: "A Tale of Bengal",
        reminderDateSent: "25-07-2024 (13)",
        action: "ReSend Reminder to Author",
        view: "View"
    },
    {
        recordDate: "09-04-2024",
        author: "Ms. Ebonie Senior",
        bookTitle: "Karma Doesn't Work",
        reminderDateSent: "28-07-2024 (22)",
        action: "ReSend Reminder to Author",
        view: "View"
    },
    {
        recordDate: "25-03-2024",
        author: "Mr. Dennis VeseLove",
        bookTitle: "How to Get Rid of Negativity",
        reminderDateSent: "28-07-2024 (25)",
        view: "View"
    }
];

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