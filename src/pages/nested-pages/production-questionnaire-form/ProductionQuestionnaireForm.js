import React from 'react'
import Title from 'components/Title'
import Button from 'components/Button'
import EditableRadio from 'components/EditableRadio'
import InputWithLabel from 'components/InputWithLabel'
import EditableTextarea from 'components/EditableTextarea'
import SelectInputWithLabel from 'components/SelectInputWithLabel'

const ProductionQuestionnaireForm = () => {
    return (
        <div className='m-4 w-full'>
            <Title title='Production Questionnaire' />

            <p className="text-lg font-normal mt-2 text-cente">
                Please fill in the form to provide us with the information required.
                Work will not start until this form is completed and submitted to us.
            </p>

            <div className='w-full my-4'>
                <div className="shadow-md w-full">
                    <div className=" bg-[#F7F7F7] p-2">
                        <h2 className="text-lg font-bold p-3 mb-2">ABOUT YOU</h2>
                    </div>
                    <div className='flex gap-5 px-6'>
                        <div className='space-y-3 mt-3 w-full'>
                            <InputWithLabel label={"Author name/ Pen name*"} />
                            <InputWithLabel label={"Confirm Book Title*"} />
                            <InputWithLabel label={"Email Address*"} />

                            <div className='space-y-4 grid'>
                                <p className="text-lg font-semibold mt-2  ">
                                    I understand that the proof-read/amended copies of the manuscript will be received by email.*
                                </p>
                                <div className="text-lg font-normal mt-2 items-center flex">
                                    <input
                                        type="radio"
                                        className='m-2 border border-black item'
                                    />
                                    Electronic via email (recommended)
                                </div>
                            </div>

                            <div className='space-y-5 grid'>
                                <p className="text-lg font-semibold mt-2  ">
                                    Please upload a professional portrait photo of yourself,
                                    we will use this as the author photo. If you prefer to remain anonymous, please do not upload a photo
                                </p>
                                <Button title={"Choose File"} text={"text-white"} bg='bg-gray-500' hover='hover:bg-gray-600' width={"w-[160px]"} type={"file"} />
                            </div>
                        </div>
                        <div className='space-y-3 mt-3 w-full'>
                            <InputWithLabel label={"Address line 1*"} />
                            <InputWithLabel label={"Address line 2"} />
                            <InputWithLabel label={"City*"} />
                            <InputWithLabel label={"County/ State"} />
                            <InputWithLabel label={"Postcode/ Zipcode"} />
                            <SelectInputWithLabel label={"Country*"} />
                            <InputWithLabel label={"Contact Number*"} />
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full'>
                <div className="shadow-md w-full">
                    <div className="bg-[#F7F7F7] p-2">
                        <h2 className="text-lg font-bold p-3 mb-2 uppercase">About your book</h2>
                    </div>
                    <div className='flex gap-5 px-6'>
                        <div className='space-y-3 mt-3 w-full'>
                            <EditableRadio label={"Have you updated your manuscript since you submitted your work to us?*"} />
                            <InputWithLabel label={"Target audience age range (in years)*"} placeholder={"E.g  4 - 6 years"} />
                            <EditableTextarea
                                label={"Cover idea*"}
                                font='text-lg'
                                rows={8}
                                text={`While we always try and consider authors' suggestions for the cover design, sometimes the suggestion may not be suitable due to our criteria for ensuring the most suitable cover for the target audience. If you have a cover idea, please print below your idea in a few words for the design team to consider.Alternatively, you can leave it up to our talented graphic designers and publicity team to design an appealing cover.`}
                            />
                            <EditableTextarea
                                label={"Disclaimer*"}
                                font='text-lg'
                                rows={8}
                                text={`A formal statement stating that you are not legally responsible for something. For example, “Names and characters are the author’s imagination. Any resemblance to actual persons, living or dead is purely coincidental.”`}
                            />
                        </div>
                        <div className='space-y-3 mt-3 w-full'>
                            <EditableTextarea
                                label={"Back cover blurb*"}
                                font='text-lg'
                                rows={8}
                                text={`Compose a brief synopsis of your book – without giving the plot away. The purpose is to give the reader intriguing and tantalising hints as to what the book is about, but not too much information (no more than 150 words)`}
                            />
                            <EditableTextarea
                                label={"Author blurb"}
                                font='text-lg'
                                rows={8}
                                text={`A brief description of yourself for inside the book (no more than 80 words).`}
                            />
                            <EditableTextarea
                                label={"Dedication"}
                                font='text-lg'
                                rows={8}
                                text={`A line or two to dedicate the book to a specific person.For example, “I dedicate this book to my wife, Sophie.”\nIf you do not wish for a dedication, please write NA`}
                            />
                            <EditableTextarea
                                label={"Acknowledgements"}
                                font='text-lg'
                                rows={8}
                                text={`This is where you can thank people who helped with your book.\nFor example, “Thank you to my wife, Sophie for encouraging and helping me write this book.”\nIf you do not require acknowledgements, please write NA`}
                            />
                            <EditableTextarea
                                label={"Additional notes"}
                                font='text-lg'
                                rows={8}
                                text={`You can use this space to add any further notes`}
                            />
                            <Button title={"Submit Now"} text={'text-white mt-2'} bg='bg-green-600' hover='hover:bg-green-700' width={"w-[130px]"} />
                            <p className={`font-sm mt-2 italic text-gray-500`}>
                                Please review all information is correct before submitting the form to us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductionQuestionnaireForm