import React from "react";
import Plus from "utils/icons/Plus";

const Remaindered = () => {
  return (
    <div className="shadow mt-4 bg-[#F7F7F7] p-3 flex justify-between items-center">
      <p className="text-md font-semibold text-gray-500">
        Aine By Yugtha YJ <span className="text-black"> Book No. </span> 1
      </p>
      <p className="text-md font-normal text-gray-500">Remaindered</p>
      <button className="status-button status-paid"> £ Paid in full</button>
      <div className="w-16">
        <Plus classes={"h-full w-full"} />
      </div>
    </div>
  );
};

export default Remaindered;
