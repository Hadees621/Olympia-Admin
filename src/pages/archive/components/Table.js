import React from "react";

const Table = () => {
  return (
    <div className="my-4 gap-3 flex">
      <div className="max-h-[400px] overflow-y-auto w-full shadow">
        <table className="min-w-full divide-y divide-gray-200 shadow">
          <thead className="bg-gray-50 sticky top-0 z-10">
            {" "}
            <tr className="text-sm w-full font-bold uppercase whitespace-nowrap ">
              <th className="p-3">Status</th>
              <th className="p-3">Imprint</th>
              <th className="p-3">Author</th>
              <th className="p-3">Pen Name</th>
              <th className="p-3">Book Title</th>
              <th className="p-3 whitespace-nowrap">ISBN</th>
              <th className="p-3">Date Contract</th>
              <th className="p-3 whitespace-nowrap">Date Publication</th>
              <th className="p-3 whitespace-nowrap">Date Remaindered</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array(10)
              .fill({
                status: "Remaindered",
                imprint: "Olympia Publishers",
                author: "Lorraine Hockley",
                penName: "Lorraine Hockley",
                bookTitle: "The A-Z of Practical Wisdom",
                isbn: "978-1-905513-05-5",
                dateContract: "13-11-2005",
                datePublication: "01-03-2007",
                dateRemaindered: "25-09-2009",
                price: "£ 7.99",
                stock: "1",
              })
              .map((row, index) => (
                <tr key={index} className="text-sm font-medium text-center">
                  <td className="p-3 text-blue-600">{row.status}</td>
                  <td className="p-3">{row.imprint}</td>
                  <td className="p-3">{row.author}</td>
                  <td className="p-3">{row.penName}</td>
                  <td className="p-3">{row.bookTitle}</td>
                  <td className="p-3 whitespace-nowrap">{row.isbn}</td>
                  <td className="p-3">{row.dateContract}</td>
                  <td className="p-3">{row.datePublication}</td>
                  <td className="p-3">{row.dateRemaindered}</td>
                  <td className="p-3">{row.price}</td>
                  <td className="p-3">{row.stock}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
