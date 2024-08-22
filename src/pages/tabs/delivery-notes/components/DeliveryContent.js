import React, { useRef } from 'react';

const DeliveryContent = ({ deliveryNoteData }) => {
  const componentRef = useRef();

  const dummyDeliveryNoteData = {
    to: "Gardners Books, 1 Whitttle Drive, Willingdon Drove, Eastbourne, BN236QH",
    shipping: "Gardners Books, 1 Whitttle Drive, Willingdon Drove, Eastbourne, BN236QH",
    deliveryNoteNo: "3193",
    date: "2024-07-30",
    items: [
      {
        ref: "c7923459",
        isbn: "978-1-80074-662-6",
        title: "Estate Planning Success Just for Women",
        author: "Lynne Marie Kohm",
        price: "8.99",
        qty: "5",
      },
    ],
  };

  const data = deliveryNoteData || dummyDeliveryNoteData;

  return (
    <>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
          }

          .note-container {
            width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }

          .note-header {
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid #e5e5e5;
            padding-bottom: 20px;
            margin-bottom: 20px;
          }

          .note-address {
            width: 40%;
            line-height: 1.6;
            border: 1px solid #ccc;
            padding: 10px;
            margin-right: 20px;
          }

          .note-info {
            width: 40%;
            text-align: right;
          }

          .note-logo {
            max-width: 150px;
            margin-bottom: 10px;
          }

          .company-info {
            margin-bottom: 20px;
          }

          .note-body {
            margin-bottom: 20px;
          }

          .note-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }

          .note-table th,
          .note-table td {
            padding: 8px;
            border: 1px solid #ddd;
            text-align: left;
          }

          .note-table th {
            background-color: #f2f2f2;
          }

          .note-footer {
            display: flex;
            gap: 40px;
          }

          .terms,
          .remittance-advice {
            width: 45%;
            line-height: 1.6;
          }

          .print-note {
            background-color: red;
            cursor: pointer;
          }

          .second {
            display: grid;
            gap: 20px;
          }
        `}
      </style>
      <div ref={componentRef} className="note-container">
        <h1 className='font-bold text-lg'>DELIVERY NOTE</h1>
        <div className="note-header">
          <div className="note-address">
            <strong>Ship to:</strong><br />
            {data.shipping.split(',').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}
          </div>
          <div className="note-address">
            <strong>To:</strong><br />
            {data.to.split(',').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}
          </div>
          <div className="note-info">
            <img src="/assets/logo.png" alt="Olympia Publishers" className="note-logo" />
            <div className="company-info">
              <strong>Olympia Publishers</strong><br />
              T: +44 (0)20 3719 5833<br />
              E: accounts@olympiapublishers.com<br />
              www.olympiapublishers.com<br />
            </div>
            <div className="note-details">
              <strong>Delivery Note No:</strong> {data.deliveryNoteNo}<br />
              <strong>Date:</strong> {data.date}<br />
            </div>
          </div>
        </div>
        <div className="note-body">
          <table className="note-table">
            <thead>
              <tr>
                <th>Your Ref</th>
                <th>ISBN</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>QTY</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.ref}</td>
                  <td>{item.isbn}</td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>£{item.price}</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DeliveryContent;
