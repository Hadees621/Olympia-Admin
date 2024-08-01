import React, { useRef } from 'react';

const FinalInvoice = ({ invoiceData }) => {
  const componentRef = useRef();

  const dummyInvoiceData = {
    shipTo: "Amazon.co.uk, Plot 8 Marston Gate, The Old Brickworks, Site, Ridgemont, United Kingdom, MK43 0ZA",
    to: "Amazon.co.uk, Plot 8 Marston Gate, The Old Brickworks, Site, Ridgemont, United Kingdom, MK43 0ZA",
  };

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

          .invoice-container {
            width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }

          .invoice-header {
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid #e5e5e5;
            padding-bottom: 20px;
            margin-bottom: 20px;
          }

          .invoice-address {
            width: 40%;
            line-height: 1.6;
            border: 1px solid #ccc;
            padding: 10px;
            margin-right: 20px;
          }

          .invoice-info {
            width: 40%;
            text-align: right;
          }

          .invoice-logo {
            max-width: 150px;
            margin-bottom: 10px;
          }

          .company-info {
            margin-bottom: 20px;
          }

          .invoice-body {
            margin-bottom: 20px;
          }

          .invoice-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }

          .invoice-table th,
          .invoice-table td {
            padding: 8px;
            border: 1px solid #ddd;
            text-align: left;
          }

          .invoice-table th {
            background-color: #f2f2f2;
          }

          .invoice-footer {
            display: flex;
            gap: 40px;
          }

          .terms,
          .remittance-advice {
            width: 45%;
            line-height: 1.6;
          }

          .remittance-advice {
            border-top: 2px solid #e5e5e5;
            padding-top: 20px;
          }

          .print-invoice {
            background-color: red;
            cursor: pointer;
          }

          .second {
            display: grid;
            gap: 20px;
          }
        `}
      </style>
      <div ref={componentRef} className="invoice-container">
        <h1 className='font-bold text-lg'>INVOICE</h1>
        <div className="invoice-header">
          <div className="invoice-address">
            <strong>Ship to:</strong><br />
            {dummyInvoiceData.shipTo.split(',').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}
          </div>
          <div className="invoice-address">
            <strong>To:</strong><br />
            {dummyInvoiceData.to.split(',').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}
          </div>
          <div className="invoice-info">
            <img src="/assets/logo.png" alt="Olympia Publishers" className="invoice-logo" />
            <div className="company-info">
              <strong>Olympia Publishers</strong><br />
              T: +44 (0)20 3719 5833<br />
              E: accounts@olympiapublishers.com<br />
              www.olympiapublishers.com<br />
            </div>
            <div className="invoice-details">
              <strong>Invoice number:</strong> {invoiceData.invoiceNumber || '12345'}<br />
              <strong>Invoice date:</strong> {invoiceData.invoiceDate || '01-01-2024'}<br />
              <strong>Due date:</strong> {invoiceData.dueDate || '15-01-2024'}<br />
            </div>
          </div>
        </div>
        <div className="invoice-body">
          <table className="invoice-table">
            <thead>
              <tr>
                <th>Book Title:</th>
                <td colSpan="3">{invoiceData.bookTitle || 'Sample Book Title'}</td>
              </tr>
              <tr>
                <th>Author:</th>
                <td colSpan="3">{invoiceData.author || 'Sample Author'}</td>
              </tr>
              <tr>
                <th>ISBN:</th>
                <td colSpan="3">{invoiceData.isbn || '123-456-789'}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Format</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
              <tr>
                <td>Living Makes You Run Longer by Martin Bulger<br />PAPERBACK EDITION<br />234X156MM (Royal Portrait)</td>
                <td>£{invoiceData.price || '0.00'}</td>
                <td>{invoiceData.quantity || '0'}</td>
                <td>£{invoiceData.amount || '0.00'}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="3">DISCOUNT:</th>
                <td>£{invoiceData.discount || '0.00'} - (0%)</td>
              </tr>
              <tr>
                <th colSpan="3">Subtotal:</th>
                <td>£{invoiceData.subtotal || '0.00'}</td>
              </tr>
              <tr>
                <th colSpan="3">P&P:</th>
                <td>£{invoiceData.pnp || '0.00'}</td>
              </tr>
              <tr>
                <th colSpan="3">NET:</th>
                <td>£{invoiceData.net || '0.00'}</td>
              </tr>
              <tr>
                <th colSpan="3">VAT:</th>
                <td>£{invoiceData.vat || '0.00'} - (0%)</td>
              </tr>
              <tr>
                <th colSpan="3">TOTAL:</th>
                <td>£{invoiceData.total || '0.00'}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="invoice-footer">
          <div className="remittance-advice">
            <strong>REMITTANCE ADVICE</strong><br />
            PAY BY BANK TRANSFER USING OUR BANK DETAILS BELOW<br />
            Lloyds Bank<br />
            Sort Code: 30-13-55<br />
            Acc No: 00119908<br />
            BIC: LOYDGB21335<br />
            IBAN: GB03 LOYD 3013 5500 1199 08<br />
            Address: 1 Legg Street, Chelmsford, CM1 1JS, Essex, UK<br />
            PAY BY DEBIT / CREDIT CARD<br />
            Pay by credit/debit card call us on +44 (0)20 3719 5833<br />
            PAY BY CHEQUE (UK ONLY)<br />
            Please make cheque payable to Ashwell Publishing Ltd.<br />
          </div>
          <div className='second'>
            <div className="terms">
              <strong>Terms</strong><br />
              {invoiceData.terms?.days || '30 days'}<br />
              Invoice status: {invoiceData.terms?.shippedStatus || 'Shipped'}<br />
              Payment method: {invoiceData.terms?.paymentMethod || 'Bank Transfer'}<br />
              Payment date: {invoiceData.terms?.paymentDate || '01-01-2024'}<br />
              Unsigned<br />
            </div>
            <br />
            <div>
              <strong>Reference</strong><br />
              ISBN: {invoiceData.isbn || '123-456-789'}<br />
              Invoice number: {invoiceData.invoiceNumber || '12345'}<br />
              Amount: £{invoiceData.total || '0.00'}<br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalInvoice;

