import React from "react";
import Button from "components/Button";
import { books, olympiaBooks } from "../utils/utils";
import DatePickerField from "components/DatePickerField";

const TopSold = () => {
  return (
    <div>
      <p className="text-lg font-semibold text-center mt-12 mb-8">
        Show report:(by default current month)
      </p>

      <div className="flex items-center gap-3 px-5 w-[60%] mx-auto mb-8">
        <p className="text-lg font-semibold"> From </p>
        <DatePickerField />
        <p className="text-lg font-semibold"> To </p>
        <DatePickerField />
        <Button title="Search" />
      </div>

      <div className="font-bold shadow text-center">
        <h2 className="text-xl p-3 uppercase bg-[#F7F7F7]">
          Top 20 Books Sold
        </h2>
        <div className="text-lg justify-between flex w-[30%] mx-auto">
          <th className="px-6 py-3 border-b">Status</th>
          <th className="px-6 py-3 border-b text-green-700">Marketing</th>
        </div>
        <table className="min-w-full border">
          <tbody>
            <div className="overflow-x-auto mt text-center shadow">
              <table className="min-w-full table-fixed divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr className="text-[11px] w-full font-medium text-gray-500 uppercase">
                    <th className="p-3"> Sr#</th>
                    <th className="p-3"> Book Title</th>
                    <th className="p-3"> Pen name</th>
                    <th className="p-3"> Imprint</th>
                    <th className="p-3"> Date published</th>
                    <th className="p-3"> Number of copies sold</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book, index) => (
                    <tr key={index}>
                      <td className="p-3 border">{book.sr}</td>
                      <td className="p-3 border">{book.title}</td>
                      <td className="p-3 border">{book.penName}</td>
                      <td className="p-3 border">{book.imprint}</td>
                      <td className="p-3 border">{book.datePublished}</td>
                      <td className="p-3 border">{book.copiesSold}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-2xl py-6 pr-10 text-end">Total: 936</p>
            </div>
          </tbody>
        </table>
      </div>

      <div className="font-bold shadow text-center mt-20">
        <h2 className="text-xl p-3 uppercase bg-[#F7F7F7]">
          Top 3 Books Sold by Imprint
        </h2>
        <div className="text-lg justify-between flex w-[30%] mx-auto">
          <th className="px-6 py-3 border-b">Status</th>
          <th className="px-6 py-3 border-b text-green-700">Marketing</th>
        </div>
        <table className="min-w-full border">
          <tbody>
            <div className="overflow-x-auto mt text-center shadow">
              <table className="min-w-full table-fixed divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr className="text-[11px] w-full font-medium text-gray-500 uppercase">
                    <th className="p-3"> Sr#</th>
                    <th className="p-3"> Book Title</th>
                    <th className="p-3"> Pen name</th>
                    <th className="p-3"> Imprint</th>
                    <th className="p-3"> Date published</th>
                    <th className="p-3"> Number of copies sold</th>
                  </tr>
                </thead>
                <tbody>
                  {olympiaBooks.map((book, index) => (
                    <tr key={index}>
                      <td className="p-3 border">{book.sr}</td>
                      <td className="p-3 border">{book.title}</td>
                      <td className="p-3 border">{book.penName}</td>
                      <td className="p-3 border">{book.imprint}</td>
                      <td className="p-3 border">{book.datePublished}</td>
                      <td className="p-3 border">{book.copiesSold}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-2xl py-6 pr-10 text-end">Total: 511</p>
            </div>
          </tbody>
        </table>
        <table className="min-w-full border">
          <tbody>
            <div className="overflow-x-auto mt text-center shadow">
              <table className="min-w-full table-fixed divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr className="text-[11px] w-full font-medium text-gray-500 uppercase">
                    <th className="p-3"> Sr#</th>
                    <th className="p-3"> Book Title</th>
                    <th className="p-3"> Pen name</th>
                    <th className="p-3"> Imprint</th>
                    <th className="p-3"> Date published</th>
                    <th className="p-3"> Number of copies sold</th>
                  </tr>
                </thead>
                <tbody>
                  {olympiaBooks.map((book, index) => (
                    <tr key={index}>
                      <td className="p-3 border">{book.sr}</td>
                      <td className="p-3 border">{book.title}</td>
                      <td className="p-3 border">{book.penName}</td>
                      <td className="p-3 border">{book.imprint}</td>
                      <td className="p-3 border">{book.datePublished}</td>
                      <td className="p-3 border">{book.copiesSold}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-2xl py-6 pr-10 text-end">Total: 511</p>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSold;
