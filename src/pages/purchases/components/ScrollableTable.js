import React from "react";
import TableButton from "components/TableButton";

const ScrollableTable = ({ data }) => {
  return (
    <div class="overflow-x-auto shadow-md transition-all duration-300">
      <table class="w-full text-sm text-left max-h-[500px]">
        <thead class="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
          <tr className="text-sm font-medium text-gray-500 uppercase text-center">
            <th className="px-6 py-3 border">Name</th>
            <th className="px-6 py-3 border whitespace-nowrap">Last Name</th>
            <th className="px-6 py-3 border">Company</th>
            <th className="px-6 py-3 border">VAT</th>
            <th className="px-6 py-3 border">Tel</th>
            <th className="px-6 py-3 border">Mobile</th>
            <th className="px-6 py-3 border">Emails</th>
            <th className="px-6 py-3 border">Skype</th>
            <th className="px-6 py-3 border">Website</th>
            <th className="px-32 py-3 border whitespace-nowrap ">
              1st Address
            </th>
            <th className="px-32 py-3 border whitespace-nowrap">2nd Address</th>
            <th className="px-6 py-3 border whitespace-nowrap">Signup Date</th>
            <th className="px-6 py-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="text-sm text-gray-700 text-center border"
            >
              <td className="px-6 py-4 border whitespace-nowrap">{row.name}</td>
              <td className="px-6 py-4 border whitespace-nowrap">
                {row.lastName}
              </td>
              <td className="px-6 py-4 border whitespace-nowrap">
                {row.company}
              </td>
              <td className="px-6 py-4 border whitespace-nowrap">{row.vat}</td>
              <td className="px-6 py-4 border whitespace-nowrap">{row.tel}</td>
              <td className="px-6 py-4 border whitespace-nowrap">
                {row.mobile}
              </td>
              <td className="px-6 py-4 border whitespace-nowrap">
                {row.emails}
              </td>
              <td className="px-6 py-4 border">{row.skype}</td>
              <td className="px-6 py-4 border whitespace-nowrap">
                {row.website}
              </td>
              <td className="px-6 py-4 border">{row.address1}</td>
              <td className="px-6 py-4 border">{row.address2}</td>
              <td className="px-6 py-4 border whitespace-nowrap">
                {row.signupDate}
              </td>
              <td className="px-6 py-4 border">
                <div className="flex justify-center items-center space-x-2">
                  <TableButton title={"View"} />
                  <TableButton
                    title={"Edit"}
                    bg="bg-green-500"
                    text={"text-white"}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrollableTable;
