import React from 'react';
import SearchField from 'pages/home/components/SearchField';
import Button from 'components/Button';

const AuthorSection = ({ onButtonClick }) => {
    return (
        <div className="p-4 shadow-md">
            <div className=" bg-[#F7F7F7] p-2">
                <h2 className="text-lg font-bold p-3 mb-2">STEP 1 - ABOUT AUTHOR</h2>
            </div>
            <label className="block text-lg font-medium mt-3">Add existing author? Search by author name below</label>
            <div className='flex gap-8 items-center'>
                <div className="w-[30%]">
                    <SearchField placeholder={"Search Author"} />
                </div>
                <div className="flex items-center">
                    <Button title={"SELECT AUTHOR"} />
                    <span className="m-5 font-extrabold text-lg">OR</span>
                    <Button title={"ADD NEW AUTHOR"} bg='bg-green-600' text={"text-white"} onclick={onButtonClick} />
                </div>
            </div>
            <div>
                <label className="block text-lg font-medium mb-1">Selected authors</label>
                <ul className="list-disc pl-5">
                    <li>Qaswar </li>
                </ul>
            </div>

        </div>
    );
};

export default AuthorSection;
