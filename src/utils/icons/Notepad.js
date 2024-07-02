import React from "react";

const Notepad = ({ color = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 48 48"
    >
      <path
        fill={color}
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M26.907 11.268H6.347c-1.02 0-1.847.784-1.847 1.75v28.867c0 .966.827 1.75 1.847 1.75h30.481c1.02 0 1.848-.784 1.848-1.75V19.6m1.927-8.004a3.064 3.064 0 0 0-4.333-4.333l-2.586 2.586l4.332 4.333z"
      />
      <path
        fill={color}
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m38.016 14.182l-18.798 18.8l-6.704 2.37l2.371-6.704L33.684 9.85"
      />
    </svg>
  );
};

export default Notepad;
