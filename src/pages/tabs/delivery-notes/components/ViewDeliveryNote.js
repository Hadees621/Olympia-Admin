import React from 'react'
import Button from 'components/Button'
import DeliveryContent from './DeliveryContent'
import TableButton from 'components/TableButton'
import SelectField from 'components/SelectField'
import { renderToString } from 'react-dom/server'
import { invoiceData } from 'pages/printers/utils/utils'
import SearchField from 'pages/home/components/SearchField'
import PrintButton from 'pages/tabs/book-invoices/components/invoice/PrintButton'

const ViewDeliveryNote = () => {

  const handleOpenInvoice = () => {
    const invoiceHtml = renderToString(<DeliveryContent invoiceData={invoiceData} />);
    const printButtonHtml = renderToString(<PrintButton />);

    const newWindow = window.open('', '', 'width=800,height=600');
    newWindow.document.write(`
      <html>
        <head>
          <title>Invoice</title>
          <style>
          </style>
        </head>
        <body>
          ${invoiceHtml}
          ${printButtonHtml}
          <script>
            document.getElementById('printBtn').addEventListener('click', function() {
              window.print();
            });
          </script>
        </body>
      </html>
    `);
    newWindow.document.close();
  };

  return (
    <div className="w-full text-start items-center m-5">
      <p className="text-3xl font-semibold mt-8 ml-8">
        Welcome to Olympia Portal (olympia admin)
      </p>

      <div className="grid items-center mt-3 gap-3 m-8">
        <div className='flex items-center gap-3'>
          <p className="text-xl font-bold ">Reference: </p>
          <p className="text-lg font-semibold text-black"> c7923459</p>
        </div>

        <div className='flex items-center gap-3'>
          <p className="text-xl font-bold">Company: </p>
          <p className="text-lg font-semibold text-black">Gardner</p>
        </div>

        <div className='flex items-center gap-3'>
          <p className="text-xl font-bold ">Date: </p>
          <p className="text-lg font-semibold text-black"> 2024-07-30</p>
        </div>

      </div>

      <div className="flex items-center mt-3 gap-3">
        <SelectField placeholder={"Select Author"} />
        <SelectField placeholder={"Select Book"} />
        <SearchField bg={"bg-white"} />
        <Button title="Add" bg="bg-green-500 text-white" hover="hover:bg-green-600" />
      </div>

      <div className="flex items-center justify-end mt-3 gap-3">
        <button onClick={handleOpenInvoice} className="bg-[#001C4E1F] hover:bg-gray-300 rounded-md text-[#001C4E] font-bold px-8 py-2 text-[12px]">Print</button>
      </div>

      <div className="overflow-x-auto mt-5 text-center shadow">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr className="text-sm w-full font-medium text-gray-500 uppercase">
              <th className="p-3 w-1/6">ISBN</th>
              <th className="p-3 w-1/6">TITLE</th>
              <th className="p-3 w-1/6">AUTHOR</th>
              <th className="p-3 w-1/6">QTY</th>
              <th className="p-3 w-1/6">DELETE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm border-b text-center">
              <td className="p-3">978-1-80074-662-6</td>
              <td className="p-3">Estate Planning Success Just for Women</td>
              <td className="p-3">Lynne Marie Kohm</td>
              <td className="p-3">5</td>
              <td className="p-3">
                <div className="flex justify-center items-center space-x-2">
                  <TableButton title={"Delete"} bg="bg-red-500" hover='hover:bg-red-600' text={"text-white"} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewDeliveryNote