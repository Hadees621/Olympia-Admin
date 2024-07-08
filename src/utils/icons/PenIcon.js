export const PenIcon = ({ onClick }) => (
  <div className="mx-5">
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-8 h-8 cursor-pointer ml-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 3.487a1.875 1.875 0 012.65 2.65l-12.015 12.01a4.5 4.5 0 01-1.69.973l-4.95 1.237 1.237-4.95a4.5 4.5 0 01.973-1.69l12.015-12.01z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.98 5.994l-.705-.705"
      />
    </svg>
  </div>
);
