import React from "react";
import TableButton from "components/TableButton";

const ScrollableTable = ({ data }) => {
  return (
    <div class="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
      <table class="min-w-full table-fixed divide-y divide-gray-200">
        <thead class="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
          <tr className="text-sm font-medium text-gray-500 uppercase text-center">
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3 whitespace-nowrap">Last Name</th>
            <th className="px-6 py-3">Company</th>
            <th className="px-6 py-3">VAT</th>
            <th className="px-6 py-3">Tel</th>
            <th className="px-6 py-3">Mobile</th>
            <th className="px-6 py-3">Emails</th>
            <th className="px-6 py-3">Skype</th>
            <th className="px-6 py-3">Website</th>
            <th className="px-32 py-3 whitespace-nowrap ">
              1st Address
            </th>
            <th className="px-32 py-3 whitespace-nowrap">2nd Address</th>
            <th className="px-6 py-3 whitespace-nowrap">Signup Date</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="text-sm text-gray-700 text-center border font-bold custom-hover-row"
            >
              <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {row.lastName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {row.company}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{row.vat}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.tel}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {row.mobile}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {row.emails}
              </td>
              <td className="px-6 py-4">{row.skype}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {row.website}
              </td>
              <td className="px-6 py-4">{row.address1}</td>
              <td className="px-6 py-4">{row.address2}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {row.signupDate}
              </td>
              <td className="px-6 py-4">
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
