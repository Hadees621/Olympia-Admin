import React, { useState } from "react";
import Button from "components/Button";
import useSidebarStore from "stores/States";
import SearchField from "../home/components/SearchField";
import BumblebeeTable from "./components/BumblebeeTable";
import SelectField from "components/SelectField";
import FinalCheck from "./components/FinalCheck";
import { data } from "./utils/utils";

const Bumblebee = () => {
  const { isOpen } = useSidebarStore();
  const [activeTab, setActiveTab] = useState("processing");

  return (
    <div
      className={`w-full text-start items-center m-4  ${
        !isOpen && "max-w-[1250px]"
      }`}
    >
      {/* header */}
      <p className="text-3xl font-semibold mt-8 ml-8">
        Books ( Imprint: Bumblebee )
      </p>

      <div className="mb-4 justify-center flex pt-3">
        <ul
          className="flex flex-wrap -mb-px gap-3 text-sm font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${
                activeTab === "processing"
                  ? "text-red-600 border-red-600"
                  : "text-black hover:text-black border-black"
              }`}
              id="books-tab"
              type="button"
              role="tab"
              aria-controls="processing"
              aria-selected={activeTab === "processing"}
              onClick={() => setActiveTab("processing")}
            >
              Books
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${
                activeTab === "pre-orders"
                  ? "text-red-600 border-red-600"
                  : "text-black hover:text-black border-black"
              }`}
              id="final-check-tab"
              type="button"
              role="tab"
              aria-controls="pre-orders"
              aria-selected={activeTab === "pre-orders"}
              onClick={() => setActiveTab("pre-orders")}
            >
              Final Check (0)
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content" className="w-full">
        <div
          className={`p-4 dark:bg-gray-800 ${
            activeTab === "processing" ? "block" : "hidden"
          }`}
          id="books-tab"
          role="tabpanel"
          aria-labelledby="processing-tab"
        >
          <div>
            <div className="flex items-center mt-3 gap-3 m-4">
              <SearchField placeholder="Book Title" />
              <SearchField placeholder="Pen Name/Author Name" />
              <Button title="Search" />
              <Button title="Clear" />
              <SelectField placeholder={"Select Filter"} />
            </div>

            <div className="mt-3 w-full mx-4 font-semibold text-lg">
              <p>Olympia illustrations: 113</p>
              <p>Author illustrations: 137</p>
              <p>No illustrations: 10</p>
              <p>Total Records: 260</p>
            </div>

            <div className="flex items-center h-full justify-center gap-3 w-full">
              {[...Array(17)].map((_, index) => (
                <li role="presentation" key={index} className="list-none">
                  <button
                    className="border-b-2 rounded-t-lg text-md font-bold"
                    id=""
                    type="button"
                    role="tab"
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </div>

            <div
              className={`m-4 transition-all duration-300 ${
                isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
              }`}
            >
              <BumblebeeTable data={data} />
            </div>
          </div>
        </div>
        <div
          className={`p-4 dark:bg-gray-800 ${
            activeTab === "pre-orders" ? "block" : "hidden"
          }`}
          id="final-check-tab"
          role="tabpanel"
          aria-labelledby="pre-orders-tab"
        >
          <FinalCheck />
        </div>
      </div>
    </div>
  );
};

export default Bumblebee;
