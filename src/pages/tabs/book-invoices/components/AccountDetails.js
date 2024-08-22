import React, { useState } from "react";

const AccountDetails = () => {
  const [accountDetails, setAccountDetails] = useState({
    startStock: 313,
    authorCopies: 25,
    libraryCopies: 6,
    sold: 140,
    amazonUKSold: 7,
    amazonUKNotSold: -7,
    amazonComSold: 0,
    amazonComNotSold: 0,
    gardnerSold: 2,
    gardnerNotSold: -2,
    marketing: 4,
    damaged: 0,
    returned: 0,
    availableStock: 138,
    stockSituation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({
      ...accountDetails,
      [name]: value,
    });
  };

  return (
    <div className="w-full shadow-md bg-[#F7F7F7] p-7">
      <div className="border-b mx-2">
        <h2 className="text-lg font-semibold p-2">Account details</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-5">
        {Object.keys(accountDetails).map((key, index) =>
          key !== "stockSituation" ? (
            <div key={index} className="flex flex-col">
              <label className="mb-1 capitalize">
                {key.replace(/([A-Z])/g, " $1")}:
              </label>
              <input
                type={
                  typeof accountDetails[key] === "number" ? "number" : "text"
                }
                name={key}
                value={accountDetails[key]}
                onChange={handleChange}
                className="shadow appearance-none rounded w-full p-2.5 text-gray-700 leading-tight focus:outline-none bg-white"
              />
            </div>
          ) : (
            <div key={index} className="col-span-2 flex flex-col">
              <label className="mb-1 capitalize">
                {key.replace(/([A-Z])/g, " $1")}:
              </label>
              <textarea
                name={key}
                value={accountDetails[key]}
                onChange={handleChange}
                className="border p-2"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AccountDetails;
