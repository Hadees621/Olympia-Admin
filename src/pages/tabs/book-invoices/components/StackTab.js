import React from "react";
import InvoiceTable from "./InvoiceTable";
import AccountDetails from "./AccountDetails";

const StackTab = () => {
  return (
    <div className="flex gap-5">
      <div className="grid gap-4 w-full">
        <InvoiceTable title={"Amazon.com.uk"} />
        <InvoiceTable title={"Amazon.com"} />
        <InvoiceTable title={"Gardner"} />
      </div>
      <div className="w-full">
        <AccountDetails />
      </div>
    </div>
  );
};

export default StackTab;
