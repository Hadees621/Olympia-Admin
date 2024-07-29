import React from 'react';

const Stepper = ({ currentStep }) => {
    return (
        <div className="flex items-center w-full justify-center boder border-black my-10">
            {/* Step 1 */}
            <li className={`flex items-center w-96 ${currentStep > 1 ? 'text-blue-600' : 'text-gray-500'} after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block ${currentStep >= 2 ? 'after:border-blue-100' : 'after:border-gray-100'}`}>
                <div>
                    <span className={`flex items-center justify-center w-10 h-10 ${currentStep >= 1 ? 'bg-blue-100' : 'bg-gray-100'} rounded-full lg:h-12 lg:w-12 shrink-0`}>
                        1
                    </span>
                </div>
            </li>

            {/* Step 2 */}
            <li className={`flex items-center w-96 ${currentStep > 2 ? 'text-blue-600' : 'text-gray-500'} after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block ${currentStep >= 3 ? 'after:border-blue-100' : 'after:border-gray-100'}`}>
                <span className={`flex items-center justify-center w-10 h-10 ${currentStep >= 2 ? 'bg-blue-100' : 'bg-gray-100'} rounded-full lg:h-12 lg:w-12 shrink-0`}>
                    2
                </span>
            </li>

            {/* Step 3 */}
            <li className={`flex items-center w-min ${currentStep === 3 ? 'text-blue-600' : 'text-gray-500'}`}>
                <span className={`flex items-center justify-center w-10 h-10 ${currentStep >= 3 ? 'bg-blue-100' : 'bg-gray-100'} rounded-full h-12 w-12 shrink-0`}>
                    3
                </span>
            </li>
        </div>
    );
};

export default Stepper;
