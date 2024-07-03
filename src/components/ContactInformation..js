import React from "react";

export const ContactInformation = ({ contactDetails }) => (
  <div className="w-full shadow-lg">
    <div className="border-b pb-3 mb-3 mx-4">
      <h2 className="text-lg font-semibold mx-5 mt-4">Contact details</h2>
    </div>
    <div className="grid grid-cols-2 gap-4 px-8">
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
