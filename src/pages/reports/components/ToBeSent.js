import React from "react";
import useSidebarStore from "stores/States";

const ToBeSent = () => {
  const manuscripts = {
    totalUnderProduction: 215,
    total: 225,
    publishers: [
      { name: "Bumblebee Books", count: 166 },
      { name: "Ebooks", count: 15 },
      { name: "Olympia Publishers", count: 24 },
    ],
  };
  const { isOpen } = useSidebarStore();

  return (
    <div
      className={`transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
        }`}
    >
      <div className="font-bold shadow text-center mt-10">
        <h2 className="text-xl p-3 uppercase bg-[#F7F7F7]">
          Manuscripts to be sent to proofreader
        </h2>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b">Status : </th>
              <th className="px-6 py-3 border-b text-orange-500">
                Under Production
              </th>
            </tr>
          </thead>
          <tbody>
            {manuscripts.publishers.map((publisher, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border-b text-lg">{publisher.name}</td>
                <td className="px-6 py-4 border-b text-lg">
                  {publisher.count}
                </td>
              </tr>
            ))}

            <tr>
              <td className="px-6 py-4 border-b text-lg">Total </td>
              <td className="px-6 py-4 border-b text-lg">
                {manuscripts.totalUnderProduction}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToBeSent;
