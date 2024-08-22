import React from "react";

const DetailViewComponent = ({ item, onRemoveDetail }) => {
  return (
    <div className="shadow-md bg-[#F7F7F7]">
      <div className="p-5 mx-4 border-b">
        <p className="text-xl font-bold">View items</p>
      </div>
      <div className="space-y-2 p-5">
        {item.details.map((detail, index) => (
          <div
            key={index}
            className="border-b pb-2 mb-2 flex justify-between items-start"
          >
            <div>
              <p>
                <strong>Date:</strong> {item.date}
              </p>
              <p>
                <strong>Sender's name:</strong> {detail.senderName}
              </p>
              <p>
                <strong>Logged by:</strong> {detail.loggedBy}
              </p>
              <p>
                <strong>Department:</strong> {detail.department}
              </p>
              <p>
                <strong>Description:</strong> {detail.description}
              </p>
            </div>
            <button
              className="text-red-600 ml-4 font-extrabold"
              onClick={() => onRemoveDetail(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailViewComponent;
