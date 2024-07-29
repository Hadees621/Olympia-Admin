import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditorialNotes = ({ title }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [notes, setNotes] = useState([
    {
      date: "03-12-2020 13:14",
      note: "testr",
      fileName: "1607001253(708158).pdf",
    },
    {
      date: "03-12-2020 13:12",
      note: "tesstss",
      fileName: "1607001162(862971).pdf",
    },
    {
      date: "03-12-2020 13:11",
      note: "teststs",
      fileName: "1607001064(552272).pdf",
    },
    {
      date: "03-12-2020 13:14",
      note: "testr",
      fileName: "1607001253(708158).pdf",
    },
    {
      date: "03-12-2020 13:12",
      note: "tesstss",
      fileName: "1607001162(862971).pdf",
    },
    {
      date: "03-12-2020 13:11",
      note: "teststs",
      fileName: "1607001064(552272).pdf",
    },
  ]);
  const [newNote, setNewNote] = useState("");
  const [newFile, setNewFile] = useState(null);

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleFileChange = (e) => {
    setNewFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (newNote && newFile) {
      const newEntry = {
        date: new Date().toLocaleString(),
        note: newNote,
        fileName: newFile.name,
      };
      setNotes([...notes, newEntry]);
      setNewNote("");
      setNewFile(null);
    }
  };

  const renderNotes = (notes) => (
    <div className="space-y-1 w-full max-h-[200px] py-2 overflow-y-scroll shadow">
      {notes.map((note, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 rounded-md bg-white"
        >
          <div className="w-full">
            <p className="text-sm text-gray-500">{note.date}</p>
            <p className="text-sm">{note.note}</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-sm font-semibold mr-2">{note.fileName}</p>
            <button className="text-sm text-green-400">Download</button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFileUploadSection = () => (
    <>
      <textarea
        className="w-full mt-4 p-3 shadow rounded-md"
        rows="3"
        placeholder="Enter note here"
        value={newNote}
        onChange={handleNoteChange}
      ></textarea>
      <div className="flex mt-2 space-x-2">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Select files
        </label>
        <button
          onClick={handleUpload}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </div>
      <div className="border mt-4 p-6 text-gray-500 text-center">
        Drop files here
      </div>
    </>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="p-5">
            {renderNotes(notes)}
            {renderFileUploadSection()}
          </div>
        );
      case "past-notes":
        return (
          <div className="p-5">
            {renderFileUploadSection()}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Notes log</h3>
              {renderNotes(notes)}
            </div>
          </div>
        );
      case "editors-correspondence":
        return (
          <div className="space-y-2 p-5">
            <p className="text-lg">Author Correspondence:</p>
            <p className="text-lg">Publisher Correspondence:</p>
          </div>
        );
      default:
        return null;
    }
  };

  const renderTabButton = (tabName, label) => (
    <button
      className={`px-4 py-2 text-sm font-semibold ${activeTab === tabName ? "text-white bg-red-600" : "text-gray-600"
        }`}
      onClick={() => setActiveTab(tabName)}
    >
      {label}
    </button>
  );

  return (
    <div className="w-full shadow-md bg-[#F7F7F7]">
      <div className="p-5 mx-4 border-b">
        <p className="text-xl font-bold">{title}</p>
      </div>
      <div className="flex p-4">
        {renderTabButton("overview", "Overview")}
        {renderTabButton("past-notes", "Past notes")}
        {renderTabButton("editors-correspondence", "Editors Correspondence")}
        <Link to={"/pending-production-questionnaires"}>
          <button className="ml-auto px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded">
            Pending production questionnaire
          </button>
        </Link>
      </div>
      <div className="p-">{renderTabContent()}</div>
    </div>
  );
};

export default EditorialNotes;
