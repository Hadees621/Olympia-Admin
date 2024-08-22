import React, { useState } from "react";

const InvoiceTable = ({ title }) => {
  const [notInvoiced, setNotInvoiced] = useState([
    { date: "05-12-2022", quantity: 1 },
    { date: "05-12-2022", quantity: -1 },
  ]);
  const [invoiced, setInvoiced] = useState([
    { date: "27-01-2010", amount: 3.2 },
    { date: "08-02-2010", amount: 3.2 },
    { date: "10-03-2010", amount: 3.2 },
    { date: "13-04-2010", amount: 3.2 },
    { date: "08-06-2010", amount: 3.2 },
    { date: "09-09-2010", amount: 3.2 },
    { date: "26-01-2011", amount: 3.2 },
    { date: "18-05-2018", amount: 3.2 },
  ]);
  const [newBook, setNewBook] = useState({ date: "", quantity: "" });

  const handleAddBook = () => {
    setNotInvoiced([...notInvoiced, newBook]);
    setNewBook({ date: "", quantity: "" });
  };

  return (
    <div className="w-full shadow-md bg-[#F7F7F7] p-7">
      <div className="border-b mx-2">
        <h2 className="text-lg font-semibold p-2">{title}</h2>
      </div>
      <div className="flex justify-between gap-4 pt-8 p-2">
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Not invoiced</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Date</th>
                <th className="border p-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {notInvoiced.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item.date}</td>
                  <td
                    className={`border p-2 ${
                      item.quantity < 0 ? "text-red-500" : ""
                    }`}
                  >
                    {item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-2">
            Total: {notInvoiced.reduce((acc, item) => acc + item.quantity, 0)}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Invoiced</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Date</th>
                <th className="border p-2">Amount £</th>
              </tr>
            </thead>
            <tbody>
              {invoiced.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item.date}</td>
                  <td className="border p-2">£ {item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-2">Total Invoices: {invoiced.length}</div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Add new Amazon.co.uk books</h3>
        <div className="flex gap-4">
          <input
            type="date"
            className="border p-2 w-full"
            value={newBook.date}
            onChange={(e) => setNewBook({ ...newBook, date: e.target.value })}
          />
          <input
            type="number"
            className="border p-2 w-full"
            value={newBook.quantity}
            onChange={(e) =>
              setNewBook({ ...newBook, quantity: parseInt(e.target.value) })
            }
            placeholder="Enter Quantity"
          />
          <button
            className="bg-green-500 text-white p-2"
            onClick={handleAddBook}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;
