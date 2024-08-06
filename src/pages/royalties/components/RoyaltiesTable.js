import { data } from "../utils/utils";
import Button from "components/Button";
import React, { useState } from "react";
import useSidebarStore from "stores/States";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";

const RoyaltiesTable = () => {
  const { isOpen } = useSidebarStore();
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => index));
    }
  };

  const handleSelectRow = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const isRowSelected = (index) => selectedRows.includes(index);
  const handleDownload = () => {
    const blob = new Blob(["File content"], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "filename.txt"; // The name of the file to be downloaded
    link.click();
    URL.revokeObjectURL(url);
  };
  const openNewWindow = (rowData) => {
    const newWindow = window.open("", "_blank", "width=800,height=600");

    newWindow.document.write(`
      <html>
        <head>
          <title>Royalty Statement</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .form-group { margin-bottom: 10px; font-size: 12px; }
            label { font-size: 13px; }
            input, select { font-size: 12px; }
            .form-group label { display: block; font-weight: bold; }
            .form-group input, .form-group select { width: 100%; padding: 5px; }
            .form-group button { padding: 5px 10px; }
            .form-header { font-size: 20px; margin-bottom: 20px; font-weight: bold; }
            .form-section { display: flex; flex-wrap: wrap; gap: 20px; }
            .form-column { flex: 1; padding: 10px; min-width: 300px; }
            .top-section { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
            .left-section, .right-section { display: flex; flex-direction: column; font-size: 14px; }
            .logo { width: 80px; margin-bottom: 10px; }
            .info-section { padding: 10px; }
            .info-section div { margin-bottom: 5px; }
            .contact-info { margin-top: 20px; }
            .form-column-half { flex: 1; padding: 10px; min-width: 300px; }
            .royalty { font-size: 13px;}
            .flex {display: flex;  gap-between: 5px}
          </style>
        </head>
        <body>
          <div class="top-section">
            <div class="left-section">
            <div>
            <div class="logo">
              <a href="#"><img src="/assets/logo.png" alt="Logo"></a>
            </div>
            <div class="info-section">
              <div><strong>Mrs. Halcarz Abigail</strong></div>
              <div>4 Hill House</div>
              <div>Trinity Close</div>
              <div>Ashby de la Zouch, United Kingdom</div>
              <div>LE65 2GT</div>
            </div>
            </div>
            </div>
            <div class="right-section">
              <div class="info-section">
                <div><strong>Ashwell Publishing LTD</strong></div>
                <div>T/A Olympia Publishers</div>
                <div>Tallis House</div>
                <div>2 Tallis Street</div>
                <div>London UK</div>
                <div>EC4Y 0AB</div>
                <div class="contact-info">
                  <div><strong>Tel:</strong> 0203 755 3166</div>
                  <div><strong>Email:</strong> royalties@olympiapublishers.com</div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-header">Final Royalty Statement for Author</div>
          <div class="form-section">
            <div class="form-column">
            <div>
            <div class="form-group">
              <label>Author Name:</label>
              <input type="text" id="authorName" value="Mrs. Halcarz Abigail" readonly />
            </div>
            <div class="form-group">
              <label>Book Title:</label>
              <input type="text" id="bookTitle" value="My Mummy Runs" readonly />
            </div>
             <div class="form-group">
              <label>Book Price:</label>
              <input type="text" id="bookPriceUpper" value="£ 4.99" readonly />
            </div>
            <div class="form-group">
              <label>ISBN:</label>
              <input type="text" id="isbn" value="978-1-83934-216-5" readonly />
            </div>
            </div>
              <div>
              <div class="form-group">
                <label>Publication Date:</label>
                <input type="date" id="publicationDate" value="2021-02-25" readonly />
              </div>
              <div class="form-group royalty">
                <label class="form-group royalty">Royalty Information:</label>
                <div class="form-group royalty">Home Sale : 25%</div>
                <div class="form-group royalty">Foreign Sale : 25%</div>
                <div class="form-group royalty">EBooks : 50%</div>
              </div>
              </div>
            </div>
          </div>
          <div class="form-section">
            <div class="form-column-half">
              <div class="form-group">
                <label>Year:</label>
                <select id="year">
                  <option value="2024" selected>2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
              <div class="form-group">
                <label>Time Period:</label>
                <select id="timePeriod">
                  <option value="1st Jan-30st June" selected>1st Jan-30st June</option>
                  <option value="1st July-31st Dec">1st July-31st Dec</option>
                  <!-- Add more options as needed -->
                </select>
              </div>
              <div class="form-group">
                <label>Royalty Payment Date:</label>
                <input type="date" id="royaltyPaymentDate" value="2024-08-06" />
              </div>
              <div class="form-group">
                <label>Amount Paid for This Time Period:</label>
                <input type="text" id="amountPaid" value="£ 0.98" />
              </div>
              <div class="form-group">
                <label>Royalty Broughtforward (1st Jul-31st Dec 2023):</label>
                <input type="text" id="broughtforward1" value="£ 0.32" />
              </div>
              <div class="form-group">
                <label>Royalty Broughtforward (1st Jan-30th June 2023):</label>
                <input type="text" id="broughtforward2" value="£ 4.27" />
              </div>
            </div>
            <div class="form-column-half">
              <div class="form-group">
                <label>Royalty Broughtforward (1st Jul-31st Dec 2022):</label>
                <input type="text" id="broughtforward3" value="£ 2.21" />
              </div>
              <div class="form-group">
                <label>Royalty Broughtforward (1st Jan-30th June 2022):</label>
                <input type="text" id="broughtforward4" value="£ 1.59" />
              </div>
              <div class="form-group">
                <label>Royalty Broughtforward (1st Jul-31st Dec 2021):</label>
                <input type="text" id="broughtforward5" value="£ 11.26" />
              </div>
              <div class="form-group">
                <label>Total Broughtforward:</label>
                <input type="text" id="totalBroughtforward" value="£ 19.65" />
              </div>
              <div class="form-group">
                <label>Total Amount Paid:</label>
                <input type="text" id="totalAmountPaid" value="£ 20.63" />
              </div>
            </div>
          </div>
          <div class="form-section">
            <button onclick="window.print()">Print</button>
          </div>
        </body>
      </html>
    `);

    newWindow.document.close();
  };

  return (
    <div
      className={`m-4 transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1200px]"
        }`}
    >
      <div className="flex items-center mt-10 mb-4 gap-3">
        <div className="w-[50%] gap-5 flex items-center">
          <p className="text-lg font-semibold"> With Selected: </p>
          <SelectField />
          <Button title="Submit" />
        </div>
        <div className="w-[50%] gap-5 flex items-center justify-end">
          <p className="text-lg font-semibold"> Total: 410 </p>
          <Button
            title="Download"
            bg="bg-green-600"
            hover="hover:bg-green-700"
            text={'text-white'}
            onClick={handleDownload}
          />
        </div>
      </div>
      <div className="overflow-x-auto shadow-md transition-all duration-300">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="text-xs font-medium text-gray-500 uppercase text-center whitespace-nowrap">
              <th className="px-6 py-3 border space-x-4 flex items-center gap-3">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === data.length}
                />
                Select All
              </th>
              <th className="px-6 py-3 border">View</th>
              <th className="px-6 py-3 border">Email Status</th>
              <th className="px-6 py-3 border">Book </th>
              <th className="px-6 py-3 border">Author</th>
              <th className="px-6 py-3 border"> Duration</th>
              <th className="px-6 py-3 border">Issue Date</th>
              <th className="px-6 py-3 border">Royalties Amount</th>
              <th className="px-6 py-3 border">Broughtforward Amount</th>
              <th className="px-6 py-3 border">Total Amount</th>
              <th className="px-6 py-3 border">Issued</th>
              <th className="px-6 py-3 border">Status</th>
              <th className="px-6 py-3 border">Payment Date</th>
              <th className="px-6 py-3 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap ${isRowSelected(index) ? "bg-gray-100" : ""
                  }`}
              >
                <td className="px-6 py-4 border">
                  <input
                    type="checkbox"
                    onChange={() => handleSelectRow(index)}
                    checked={selectedRows.includes(index)}
                  />
                </td>
                <td className="px-6 py-4 border">
                  <TableButton title="View" onClick={() => openNewWindow(row)} />
                </td>
                <td className="px-6 py-4 border">{row.emailStatus}</td>
                <td className="px-6 py-4 border">{row.book}</td>
                <td className="px-6 py-4 border">{row.author}</td>
                <td className="px-6 py-4 border">{row.duration}</td>
                <td className="px-6 py-4 border">{row.issueDate}</td>
                <td className="px-6 py-4 border">{row.royaltiesAmount}</td>
                <td className="px-6 py-4 border">{row.broughtforwardAmount}</td>
                <td className="px-6 py-4 border">{row.totalAmount}</td>
                <td className="px-6 py-4 border">
                  <SelectField width="min-w-[120px]" />
                </td>
                <td className="px-6 py-4 border">{row.status}</td>
                <td className="px-6 py-4 border">{row.paymentDate}</td>
                <td className="px-6 py-4 border">
                  <TableButton title="Delete" bg="bg-red-500" hover="hover:bg-red-600" text={'text-white'} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoyaltiesTable;

