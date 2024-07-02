import React from "react";
import Calculator from "../../../utils/icons/Calculator";
import Notepad from "../../../utils/icons/Notepad";
import Speaker from "../../../utils/icons/Speaker";

const TableRow = ({ data }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status-button status-pending";
      case "Paid in Full":
        return "status-button status-paid";
      case "Hardback":
        return "status-button status-hardback";
      case "Traditional":
        return "status-button status-traditional";
      case "Paying":
        return "status-button status-paying";
      default:
        return "status-button";
    }
  };

  return (
    <tr className="text-[10px]">
      <td className="p-3 text-orange-400">{data.status}</td>
      <td className="p-3">{data.imprint}</td>
      <td className="p-3">{data.author}</td>
      <td className="p-3">{data.penName}</td>
      <td className="p-3">{data.bookTitle}</td>
      <td className="p-3">{data.isbn}</td>
      <td className="p-3">{data.dateContract}</td>
      <td className="p-3">{data.datePublication}</td>
      <td className="p-3">
        <div className="flex space-x-2">
          <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
            <Calculator color={data.authorForms.form1 ? "green" : "white"} />
          </div>
          <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
            <Notepad color={data.authorForms.form2 ? "green" : "white"} />
          </div>
          <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
            <Speaker color={data.authorForms.form3 ? "green" : "white"} />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`${getStatusClass(data.paymentStatus)}`}>
          £ {data.paymentStatus}
        </span>
      </td>
    </tr>
  );
};

export default TableRow;

// import React from "react";
// import Calculator from "../../../utils/icons/Calculator";
// import Notepad from "../../../utils/icons/Notepad";
// import Speaker from "../../../utils/icons/Speaker";

// const TableRow = ({ data }) => {
//   const getStatusClass = (status) => {
//     switch (status) {
//       case "Pending":
//         return "status-button status-pending";
//       case "Paid in Full":
//         return "status-button status-paid";
//       case "Hardback":
//         return "status-button status-hardback";
//       case "Traditional":
//         return "status-button status-traditional";
//       case "Paying":
//         return "status-button status-paying";
//       default:
//         return "status-button";
//     }
//   };

//   return (
//     <tr className="text-[10px]">
//       <td className="p-3">{data.status}</td>
//       <td className="p-3">{data.imprint}</td>
//       <td className="p-3">{data.author}</td>
//       <td className="p-3">{data.penName}</td>
//       <td className="p-3">{data.bookTitle}</td>
//       <td className="p-3">{data.isbn}</td>
//       <td className="px-6 py-4 whitespace-nowrap">{data.dateContract}</td>
//       <td className="px-6 py-4 whitespace-nowrap">{data.datePublication}</td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="flex space-x-2">
//           <div className="p-2 rounded-3xl bg-[#C3C4C5] cursor-pointer">
//             {data.authorForms.form1 ? <Calculator color="green" /> : null}
//           </div>
//           <div className="p-2 rounded-3xl bg-[#C3C4C5] cursor-pointer">
//             {data.authorForms.form2 ? <Notepad /> : null}
//           </div>
//           <div className="p-2 rounded-3xl bg-[#C3C4C5] cursor-pointer">
//             {data.authorForms.form3 ? <Speaker color="green" /> : null}
//           </div>
//         </div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <span className={`${getStatusClass(data.paymentStatus)}`}>
//         £ {data.paymentStatus}
//         </span>
//       </td>
//     </tr>
//   );
// };

// export default TableRow;

// import React from "react";
// import Calculator from "../../../utils/icons/Calculator";
// import Notepad from "../../../utils/icons/Notepad";
// import Speaker from "../../../utils/icons/Speaker";
// const TableRow = ({ data }) => {
//   return (
//     <tr className="text-[10px]">
//       <td className="p-3 text-orange-500">{data.status}</td>
//       <td className="p-3">{data.imprint}</td>
//       <td className="p-3">{data.author}</td>
//       <td className="p-3">{data.penName}</td>
//       <td className="p-3">{data.bookTitle}</td>
//       <td className="p-3">{data.isbn}</td>
//       <td className="px-6 py-4 whitespace-nowrap">{data.dateContract}</td>
//       <td className="px-6 py-4 whitespace-nowrap">{data.datePublication}</td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="flex space-x-2 ">
// <div className="p-2 rounded-3xl bg-[#C3C4C5] cursor-pointer">
//   {data.authorForms.form1 ? <Calculator color="green" /> : null}
// </div>
// <div className="p-2 rounded-3xl bg-[#C3C4C5] cursor-pointer">
//   {data.authorForms.form2 ? <Notepad /> : null}
// </div>
// <div className="p-2 rounded-3xl bg-[#C3C4C5] cursor-pointer">
//   {data.authorForms.form3 ? <Speaker color="green" /> : null}
// </div>
//         </div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">{data.paymentStatus}</td>
//     </tr>
//   );
// };

// export default TableRow;
