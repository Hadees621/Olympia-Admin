import React, { useRef } from 'react';

const FinalInvoice = ({ invoiceData }) => {
    const componentRef = useRef();

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
          width: 30%;
          line-height: 1.6;
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
          gap: 40px !important; 
        }

        .terms,
        .remittance-advice {
          width: 45%;
          line-height: 1.6;
        }

        .remittance-advice {
          border-top: 2px solid #e5e5e5;
          padding-top: 20px;
          padding-bottom: 20px;

        }

        .print-invoice{
        bgcolor: #red;
        cursor: pointer;


        .second{
        display: grid;
     gap: 40px !important; 
     padding-top: 40px !important;
        }
        }
      `}</style>
            <div ref={componentRef} className="invoice-container">
                <div className="invoice-header">
                    <div className="invoice-address">
                        <strong>Ship to:</strong><br />
                        {invoiceData.shipTo.split(',').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}
                    </div>
                    <div className="invoice-address">
                        <strong>To:</strong><br />
                        {invoiceData.to}
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
                            <strong>Invoice number:</strong> {invoiceData.invoiceNumber}<br />
                            <strong>Invoice date:</strong> {invoiceData.invoiceDate}<br />
                            <strong>Due date:</strong> {invoiceData.dueDate}<br />
                        </div>
                    </div>
                </div>
                <div className="invoice-body">
                    <table className="invoice-table">
                        <thead>
                            <tr>
                                <th>Book Title:</th>
                                <td colspan="3">{invoiceData.bookTitle}</td>
                            </tr>
                            <tr>
                                <th>Author:</th>
                                <td colspan="3">{invoiceData.author}</td>
                            </tr>
                            <tr>
                                <th>ISBN:</th>
                                <td colspan="3">{invoiceData.isbn}</td>
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
                                <td>£{invoiceData.price}</td>
                                <td>{invoiceData.quantity}</td>
                                <td>£{invoiceData.amount}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colspan="3">DISCOUNT:</th>
                                <td>£{invoiceData.discount} - (0%)</td>
                            </tr>
                            <tr>
                                <th colspan="3">Subtotal:</th>
                                <td>£{invoiceData.subtotal}</td>
                            </tr>
                            <tr>
                                <th colspan="3">P&P:</th>
                                <td>£{invoiceData.pnp}</td>
                            </tr>
                            <tr>
                                <th colspan="3">NET:</th>
                                <td>£{invoiceData.net}</td>
                            </tr>
                            <tr>
                                <th colspan="3">VAT:</th>
                                <td>£{invoiceData.vat} - (0%)</td>
                            </tr>
                            <tr>
                                <th colspan="3">TOTAL:</th>
                                <td>£{invoiceData.total}</td>
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
                            {invoiceData.terms.days}<br />
                            Invoice status: {invoiceData.terms.shippedStatus}<br />
                            Payment method: {invoiceData.terms.paymentMethod}<br />
                            Payment date: {invoiceData.terms.paymentDate}<br />
                            Unsigned<br />
                        </div>
                        <br />
                        <div>
                            <strong>Reference</strong><br />
                            ISBN: {invoiceData.isbn}<br />
                            Invoice number: {invoiceData.invoiceNumber}<br />
                            Amount: £{invoiceData.total}<br />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default FinalInvoice;
