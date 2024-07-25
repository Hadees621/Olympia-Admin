import React from "react";
import SearchField from "../home/components/SearchField";
import Button from "components/Button";
import ScrollableTable from "./components/ScrollableTable";
import useSidebarStore from "stores/States";
import { data } from "./utils/utils";

const Purchases = () => {
  const { isOpen } = useSidebarStore();


  return (
    <div className="w-full text-start items-center m-4">
      {/* header */}
      <>
        <p className="text-3xl font-semibold mt-8 ml-8">
          Welcome to Olympia Portal (olympia admin)
        </p>

        <div className="flex items-center mt-3 gap-3 m-4">
          <SearchField placeholder="Client Name" />
          <Button title="Search" />
          <SearchField placeholder="Company Name" />
          <Button title="Search" />
          <Button title="ISBN Search" href="/isbn-search" />
        </div>
        <div className="flex items-center justify-end mt-3 gap-3 my-4">
          <Button title="Unpaid Invoices" />
          <Button title="Pending purchases" />
          <Button
            title="Add New Client"
            bg="bg-green-600"
            text={"text-white"}
          />
          <Button title="All purchases" href="/all-purchases" />
        </div>
      </>

      <div
        className={`m-4 transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
          }`}
      >
        <ScrollableTable data={data} />
      </div>
    </div>
  );
};

export default Purchases;
