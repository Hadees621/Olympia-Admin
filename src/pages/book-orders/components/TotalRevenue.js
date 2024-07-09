import React from "react";

// { bookSales, postage, revenue }
const TotalRevenue = () => {
  const bookSales = 986.3;
  const postage = 260.5;
  const revenue = 1246.8;
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded shadow-lg px-24 m-5">
      <div className="text-lg font-bold mb-2">Total Book Sales:</div>
      <div className="text-xl font-semibold text-green-600">
        £ {bookSales.toFixed(2)}
      </div>
      <div className="text-lg font-bold mt-4 mb-2">Total Postage:</div>
      <div className="text-xl font-semibold text-red-600">
        £ {postage.toFixed(2)}
      </div>
      <div className="text-lg font-bold mt-4 mb-2">Total Revenue:</div>
      <div className="text-xl font-semibold text-purple-600">
        £ {revenue.toFixed(2)}
      </div>
    </div>
  );
};

export default TotalRevenue;
