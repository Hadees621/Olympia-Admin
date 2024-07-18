import React from "react";
import Button from "components/Button";

const TableComponent = ({ data, onView }) => {
  return (
    <div className="overflow-x-auto shadow-md transition-all duration-300">
      <table className="w-full text-sm">
        <thead className=" text-sm bg-gray-50 whitespace-nowrap sticky top-0 z-10">
          <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">No. of items</th>
            <th className="px-6 py-3">Logged by</th>
            <th className="px-6 py-3">View</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className=" text-center">
              <td className="px-6 py-3">{item.date}</td>
              <td className="px-6 py-3">{item.numOfItems}</td>
              <td className="px-6 py-3">{item.loggedBy}</td>
              <td className="px-6 py-3">
                <div onClick={() => onView(item)}>
                  <Button title={"View"} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
