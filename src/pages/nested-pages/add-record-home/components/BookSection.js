import React from 'react';
import SelectField from 'components/SelectField';
import BookFormatSection from './BookFormatSection';
import DatePickerField from 'components/DatePickerField';
import SearchField from 'pages/home/components/SearchField';

const BookSection = () => {
    return (
        <div className="p-4 shadow-md">
            <div className="bg-[#F7F7F7] p-2 mb-6">
                <h2 className="text-lg font-bold p-3 mb-2">STEP 2 - ABOUT BOOK</h2>
            </div>

            <div className="grid grid-cols-2">
                {/* Book Information */}
                <div className="space-y-4 px-8">
                    <Field label="Book No*" component={<SearchField type="text" placeholder="Enter Number" />} />
                    <Field label="Book Title*" component={<SearchField type="text" placeholder="Enter Book Title" />} />
                    <Field label="Genre" component={<SearchField type="text" placeholder="Enter Genre" />} />
                    <Field label="Word Count" component={<SearchField type="text" placeholder="Enter Word Count" />} />
                    <Field label="Language" component={<SelectField type="text" placeholder="Select Language" />} />
                    <Field label="Contract" component={<SelectField type="text" placeholder="Select Contract" />} />
                    <Field label="Book Type*" component={<SelectField type="text" placeholder="Select Book Type" />} />
                    <Field label="Imprint*" component={<SelectField type="text" placeholder="Select Imprint" />} />
                    <BookFormatSection />
                </div>

                {/* Account and Royalties */}
                <div className="space-y-4 px-8">
                    <p className="font-bold text-lg text-red-500">Account And Royalties</p>

                    <Field label="Contract Date*" component={<DatePickerField />} />
                    <Field label="Contract Amount*" component={<SearchField type="text" placeholder="Enter Contract Amount" />} />
                    <Field
                        label="Contract Currency"
                        component={
                            <SelectField
                                options={[
                                    { value: "GBP", label: "GBP" },
                                    { value: "USD", label: "USD" },
                                    { value: "AED", label: "AED" },
                                ]}
                            />
                        }
                    />
                    <Field label="Home Sale*" component={<SearchField type="text" placeholder="Enter %" />} />
                    <Field label="Home Sale after 5000*" component={<SearchField type="text" placeholder="Enter %" />} />
                    <Field label="Foreign Sale*" component={<SearchField type="text" placeholder="Enter %" />} />
                    <Field label="Foreign Sale after 5000*" component={<SearchField type="text" placeholder="Enter %" />} />
                    <Field label="eBooks*" component={<SearchField type="text" placeholder="Enter %" />} />
                    <Field label="Audiobooks*" component={<SearchField type="text" placeholder="Enter %" />} />

                    <div className="mt-4">
                        <label className="text-lg font-semibold text-gray-600">Account Notes</label>
                        <textarea
                            placeholder="Enter author account notes"
                            className="mt-1 block w-full border-gray-400 rounded-md shadow-md bg-[#F7F7F7] p-2"
                            rows={6}
                        ></textarea>
                    </div>

                    <div className="mt-4">
                        <p className="text-lg font-bold text-gray-600 mb-3">Questionnaire Links</p>
                        <div className="flex flex-col space-y-3">
                            <Checkbox label="Accounts Questionnaire" />
                            <Checkbox label="Production Questionnaire" />
                            <Checkbox label="Publicity Questionnaire" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Field = ({ label, component }) => (
    <div className="space-y-1">
        <p className="text-lg font-semibold text-gray-600">{label}</p>
        {component}
    </div>
);

const Checkbox = ({ label }) => (
    <label className="inline-flex items-center font-bold">
        <input type="checkbox" className="form-checkbox text-blue-600" />
        <span className="ml-2">{label}</span>
    </label>
);

export default BookSection;
