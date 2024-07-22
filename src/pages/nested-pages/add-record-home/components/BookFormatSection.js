import React, { useState } from 'react';
import SearchField from 'pages/home/components/SearchField';
import SelectField from 'components/SelectField';

const BookFormatSection = () => {
    const [selectedFormat, setSelectedFormat] = useState(null);

    const handleFormatClick = (format) => {
        setSelectedFormat(format);
    };

    const renderFormatButtons = () => (
        ['Paperback', 'Hardback', 'eBook', 'Audiobook'].map((format) => (
            <div key={format} className="flex space-x-4 mt-4">
                <button
                    onClick={() => handleFormatClick(format)}
                    className={`w-[25%] px-4 py-2 rounded-md ${selectedFormat === format ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                >
                    {format}
                </button>
                <button
                    onClick={() => handleFormatClick(format)}
                    className="w-[25%] bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
                >
                    Generate ISBN
                </button>
                <SearchField placeholder="Enter ISBN" />
            </div>
        ))
    );

    const renderIllustrationsSection = () => (
        <div className="mt-4 space-y-4">
            <div>
                <p className="text-md font-semibold text-gray-600 mb-3">Illustrations provided by</p>
                <SelectField options={[
                    { value: "author", label: "Author" },
                    { value: "olympia", label: "Olympia" },
                ]} />
            </div>
            <div>
                <p className="text-md font-semibold text-gray-600 mb-3">Agreed number of illustrations</p>
                <SearchField placeholder="Enter Number" />
            </div>
        </div>
    );

    const renderYesNoButtons = (section, yesValue, noValue) => (
        <div className="flex space-x-4 mt-3">
            <button
                onClick={() => setSelectedFormat(yesValue)}
                className={`w-1/2 px-4 py-2 rounded-md ${selectedFormat === yesValue ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
            >
                Yes
            </button>
            <button
                onClick={() => setSelectedFormat(noValue)}
                className={`w-1/2 px-4 py-2 rounded-md ${selectedFormat === noValue ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
            >
                No
            </button>
        </div>
    );

    return (
        <div>
            {renderFormatButtons()}

            <div className="mt-4">
                <p className="text-lg font-semibold text-gray-600">Does the book require illustrations?</p>
                {renderYesNoButtons('illustrations', 'illustrations-yes', 'illustrations-no')}
            </div>

            {selectedFormat === 'illustrations-yes' && renderIllustrationsSection()}

            <div className="mt-4">
                <p className="text-lg font-semibold text-gray-600 mb-2">Does the book contain photographs?</p>
                {renderYesNoButtons('photographs', 'photographs-yes', 'photographs-no')}
            </div>

            <div className="mt-4">
                <p className="text-md font-semibold text-gray-600 mb-3">No of comp copies*</p>
                <SearchField placeholder="Enter Number" />
            </div>

            <div className="mt-4">
                <p className="text-md font-semibold text-gray-600 mb-3">Author copy discount (%)*</p>
                <SearchField placeholder="Enter Percentage" />
            </div>

            <div className="mt-4">
                <p className="text-md font-semibold text-gray-600 mb-3">Status</p>
                <SelectField options={[
                    { value: "under-production", label: "Under Production" },
                    { value: "published", label: "Published" },
                    { value: "out-of-print", label: "Out of Print" },
                ]} />
            </div>

            <div className="mt-4">
                <p className="text-md font-semibold text-gray-600 mb-3">Book notes</p>
                <textarea
                    placeholder="Enter book related notes"
                    className="mt-1 block w-full border-gray-400 rounded-md shadow-md bg-[#F7F7F7] p-2"
                    rows={6}
                ></textarea>
            </div>
        </div>
    );
};

export default BookFormatSection;

