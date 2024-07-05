import React from "react";

export const ContactInformation = ({ contactDetails }) => (
  <div className="w-full shadow-md bg-[#F7F7F7]">
    <div className="p-5 mx-4 border-b">
      <p className="text-xl font-bold">Contact details</p>
    </div>
    <div className="grid grid-cols-2 gap-4 px-8 mt-5">
      {contactDetails.map((item, index) => (
        <React.Fragment key={index}>
          <div className="text-left font-medium text-gray-600">
            {item.label}
          </div>
          <div className="text-left">{item.value}</div>
        </React.Fragment>
      ))}
    </div>
  </div>
);
