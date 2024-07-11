import React from "react";

const Pagination = ({ num }) => {
  return (
    <div className="flex items-center justify-center gap-3 w-full my-6">
      {[...Array(num)].map((_, index) => (
        <li role="presentation" key={index} className="list-none">
          <button
            className="border-b-2 rounded-t-lg text-md font-bold"
            type="button"
            role="tab"
          >
            {index + 1}
          </button>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
