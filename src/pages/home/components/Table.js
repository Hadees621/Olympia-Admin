import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  const data = [
    {
      status: "Under Production",
      imprint: "Olympia Publishers",
      author: "Edgardo Samaniego",
      penName: "Edgardo Samaniego",
      bookTitle: "The True Adam and Eve in the Garden of Eden",
      isbn: "978-1-83543-485-7",
      dateContract: "01-07-2024",
      datePublication: "-",
      authorForms: { form1: true, form2: false, form3: true },
      paymentStatus: "Pending",
    },
    {
      status: "Under Production",
      imprint: "Olympia Publishers",
      author: "Edgardo Samaniego",
      penName: "Edgardo Samaniego",
      bookTitle: "The True Adam and Eve in the Garden of Eden",
      isbn: "978-1-83543-485-7",
      dateContract: "01-07-2024",
      datePublication: "-",
      authorForms: { form1: false, form2: false, form3: true },
      paymentStatus: "Traditional",
    },

    {
      status: "Under Production",
      imprint: "Olympia Publishers",
      author: "Edgardo Samaniego",
      penName: "Edgardo Samaniego",
      bookTitle: "The True Adam and Eve in the Garden of Eden",
      isbn: "978-1-83543-485-7",
      dateContract: "01-07-2024",
      datePublication: "-",
      authorForms: { form1: false, form2: true, form3: false },
      paymentStatus: "Paying",
    },
    {
      status: "Under Production",
      imprint: "Olympia Publishers",
      author: "Edgardo Samaniego",
      penName: "Edgardo Samaniego",
      bookTitle: "The True Adam and Eve in the Garden of Eden",
      isbn: "978-1-83543-485-7",
      dateContract: "01-07-2024",
      datePublication: "-",
      authorForms: { form1: true, form2: false, form3: true },
      paymentStatus: "Paid in Full",
    },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="text-[10px] border w-full font-medium text-gray-500 uppercase">
            <th className="p-3 ">Status</th>
            <th className="p-3">Imprint</th>
            <th className="p-3">Author</th>
            <th className="p-3">Pen Name</th>
            <th className="p-3">Book Title</th>
            <th className="p-3">ISBN</th>
            <th className="p-3">Date Contract</th>
            <th className="p-3">Date Publication</th>
            <th className="p-3">Author Forms</th>
            <th className="p-3">Payment Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <TableRow key={index} data={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
