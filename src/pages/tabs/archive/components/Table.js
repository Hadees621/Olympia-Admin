import React from "react";
import useSidebarStore from "stores/States";

const Table = () => {
  const { isOpen } = useSidebarStore();

  return (
    <div
      className={`transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1260px]"
        }`}
    >
      <div className="my-4 gap-3 flex">
        <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
          <table className="min-w-full table-fixed divide-y divide-gray-200">
            <thead className="text-white uppercase bg-gray-50 sticky top-0 z-10">
              {" "}
              <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Imprint</th>
                <th className="px-6 py-3">Author</th>
                <th className="px-6 py-3">Pen Name</th>
                <th className="px-6 py-3">Book Title</th>
                <th className="px-6 py-3 whitespace-nowrap">ISBN</th>
                <th className="px-6 py-3">Date Contract</th>
                <th className="px-6 py-3 whitespace-nowrap">Date Publication</th>
                <th className="px-6 py-3 whitespace-nowrap">Date Remaindered</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Stock</th>
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
                  <tr key={index} className="ext-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row">
                    <td className="px-6 py-3 text-blue-600">{row.status}</td>
                    <td className="px-6 py-3">{row.imprint}</td>
                    <td className="px-6 py-3">{row.author}</td>
                    <td className="px-6 py-3">{row.penName}</td>
                    <td className="px-6 py-3">{row.bookTitle}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{row.isbn}</td>
                    <td className="px-6 py-3">{row.dateContract}</td>
                    <td className="px-6 py-3">{row.datePublication}</td>
                    <td className="px-6 py-3">{row.dateRemaindered}</td>
                    <td className="px-6 py-3">{row.price}</td>
                    <td className="px-6 py-3">{row.stock}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
