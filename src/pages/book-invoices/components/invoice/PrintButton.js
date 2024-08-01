import React from 'react';

const PrintButton = () => (
    <>
        <style>{`
      .print-button {
        background-color: #001C4E1F;
        color: #001C4E;
        padding: 8px 14px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        font-size: 12px;
        font-weight: bold;
        transition: background-color 0.3s;
      }
      .print-button:hover {
        border: none;
      }
    `}</style>
        <button id="printBtn" className="print-button">Print Invoice</button>
    </>
);

export default PrintButton;
