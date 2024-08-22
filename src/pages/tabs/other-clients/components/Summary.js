import Button from "components/Button";

const totalInvoices = 13;
const totalRevenue = "£ 200";
const totalPaid = "£ 0";
const totalRemaining = "£ 200";

const Summary = () => (
  <div className="text-lg font-bold my-10 space-y-1">
    <p>Total Invoices: {totalInvoices}</p>
    <p>Total Revenue: {totalRevenue}</p>
    <p>Total Paid: {totalPaid}</p>
    <p>Total Remaining: {totalRemaining}</p>
    <Button title={"Print"}/>
  </div>
);

export default Summary;
