import React from "react";

const Tick = () => {
  return (
    <div className="mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 16 16"
      >
        <path
          fill="none"
          stroke="green"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m2.75 8.75l3.5 3.5l7-7.5"
        />
      </svg>
    </div>
  );
};

export default Tick;
