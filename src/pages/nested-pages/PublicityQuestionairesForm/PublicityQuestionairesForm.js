import Title from 'components/Title';
import STEP1 from './components/STEP1';
import STEP2 from './components/STEP2';
import STEP3 from './components/STEP3';
import React, { useState } from 'react';
import Stepper from './components/Stepper';

const PublicityQuestionnaireForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => setCurrentStep(currentStep + 1);
  const handlePreviousStep = () => setCurrentStep(currentStep - 1);

  return (
    <div className='w-full m-4'>

      <Title title=' Author Questionnaire' />

      <p className="text-lg font-normal my-2 text-center">
        Please complete the form to provide us with the information required. <br />
        We cannot start work on your book until this form is completed and submitted to us.
      </p>

      <p className="text-lg font-normal text-center">
        The information you give us on this form will be strictly confidential.
      </p>

      <p className="text-lg font-normal my-2 text-center">
        However, we believe that this questionnaire will assist us in providing a better service to our authors and help us in making decisions <br />
        about the publication of your work. This does not constitute a contractual obligation and copyright of all material submitted to us remains <br />
        with the author.
      </p>

      <Stepper currentStep={currentStep} />

      {currentStep === 1 && (<STEP1 onClick={handleNextStep} />)}
      {currentStep === 2 && (<STEP2 next={handleNextStep} prev={handlePreviousStep} />)}
      {currentStep === 3 && (<STEP3 prev={handlePreviousStep} />)}

    </div>
  );
};

export default PublicityQuestionnaireForm;

