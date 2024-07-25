import React from 'react'
import Button from 'components/Button'
import invoiceData from '../utils/utils'
import Pagination from 'components/Pagination'
import TableButton from 'components/TableButton'
import SelectField from 'components/SelectField'

const AllPurchasesTable = () => {
    return (
        <div>
            <div className="flex items-center my-7 gap-3 px-5">
                <p className="text-lg font-semibold"> Date : From </p>
                <SelectField />
                <SelectField />
                <p className="text-lg font-semibold"> To </p>
                <SelectField />
                <SelectField />
                <SelectField />
                <Button title="Search" />
                <Button title="CSV" />
            </div>

            <Pagination num={32} />

            <div class="overflow-x-auto shadow-md transition-all duration-300 max-h-[500px] ">
                <table class="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 ">
                    <thead class="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                        <tr className="text-sm font-medium text-gray-500 uppercase text-center">
                            <th className="px-6 py-3 border">Invoice Date</th>
                            <th className="px-6 py-3 border">Due Date</th>
                            <th className="px-6 py-3 border">First Name</th>
                            <th className="px-6 py-3 border">Last Name</th>
                            <th className="px-6 py-3 border">Company</th>
                            <th className="px-6 py-3 border">Category</th>
                            <th className="px-6 py-3 border">Reference</th>
                            <th className="px-6 py-3 border">Invoice</th>
                            <th className="px-6 py-3 border">NET</th>
                            <th className="px-6 py-3 border">VAT</th>
                            <th className="px-6 py-3 border">Total Amount</th>
                            <th className="px-6 py-3 border">Amount Paid</th>
                            <th className="px-6 py-3 border">Date Paid</th>
                            <th className="px-6 py-3 border">Method</th>
                            <th className="px-6 py-3 border">Paid By</th>
                            <th className="px-6 py-3 border">Status</th>
                            <th className="px-6 py-3 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoiceData.map((row, index) => (
                            < tr key={index} className="text-sm text-gray-700 text-center border" >
                                <td className="px-6 py-4 border whitespace-nowrap">{row.invoiceDate}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.dueDate}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.firstName}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.lastName}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.company}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.category}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.reference}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.invoiceNumber}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.net}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.vat}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.totalAmount}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.amountPaid}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.datePaid}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.paymentMethod}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.paidBy}</td>
                                <td className="px-6 py-4 border whitespace-nowrap">{row.status}</td>
                                <td className="px-6 py-4 border">
                                    <div className="flex justify-center items-center space-x-2">
                                        <TableButton title={"View"} />
                                        <TableButton title={"Edit"} bg="bg-green-500" text={"text-white"} />
                                        <TableButton title={"X"} bg="bg-red-500" text={"text-white"} />
                                    </div>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllPurchasesTable