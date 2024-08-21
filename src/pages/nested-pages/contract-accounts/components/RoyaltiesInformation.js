import Button from 'components/Button'
import React, { useState } from 'react'
import Modal from 'components/modals/Modal'
import TableButton from 'components/TableButton'
import SelectField from 'components/SelectField'
import RoyaltyStatementModal from './RoyaltyStatementModal'

const RoyaltiesInformation = ({ data }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div>
            <div className='mt-4'>
                <div className="flex items-center justify-between my-4 gap-3">
                    <p className="text-2xl font-semibold my-4">
                        Royalties Information
                    </p>
                    <Button title="Royalty Statement for Author" onClick={() => setModalIsOpen(true)} />
                </div>
                <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
                    <table className="min-w-full table-fixed divide-y divide-gray-200">
                        <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                            <tr className="font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                                <th className="px-6 py-3 ">View</th>
                                <th className="px-6 py-3 ">Email Statement</th>
                                <th className="px-6 py-3 ">Duration</th>
                                <th className="px-6 py-3 ">Issue Date</th>
                                <th className="px-6 py-3 ">Royalties Amount</th>
                                <th className="px-6 py-3 ">Broughtforward Amount</th>
                                <th className="px-6 py-3 ">Total Amount</th>
                                <th className="px-6 py-3 ">Issued</th>
                                <th className="px-6 py-3  min-w-[180px]">Status</th>
                                <th className="px-6 py-3 ">Payment Date</th>
                                <th className="px-6 py-3 ">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row`}
                                >
                                    <td className="px-6 py-4 ">
                                        <TableButton title={"View"} onClick={() => setModalIsOpen(true)} />
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <TableButton title={"Send Email"} />
                                    </td>
                                    <td className="px-6 py-4 ">{row.invoiceNo}</td>
                                    <td className="px-6 py-4 ">{row.cnNo}</td>
                                    <td className="px-6 py-4 ">{row.date}</td>
                                    <td className="px-6 py-4 ">{row.amount}</td>
                                    <td className="px-6 py-4 ">{row.dueDate}</td>
                                    <td className="px-6 py-4 ">{row.paymentDate}</td>
                                    <td className="px-6 py-4  ">
                                        <SelectField />
                                    </td>
                                    <td className="px-6 py-4 ">{row.paymentMode}</td>
                                    <td className="px-6 py-4 ">
                                        <TableButton title="Delete" bg="bg-red-600" hover='hover:bg-red-700' text="text-white" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal
                isVisible={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                saveButton={false}
            >
                <RoyaltyStatementModal />
            </Modal>
        </div>
    )
}

export default RoyaltiesInformation