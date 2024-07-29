import React from 'react'

const STEP3 = ({ prev }) => {
    return (
        <div className='w-full m-5'>
            <div className="p-4 shadow-md w-full">
                <div className="bg-[#F7F7F7] p-2">
                    <h2 className="text-lg font-bold p-3 mb-2">ADDITIONAL INFORMATION</h2>
                </div>

                <p className="text-lg font-normal mt-2">
                    The first two questions relate to your local area.
                </p>
                <p className="text-lg font-normal">
                    This is usually where initial promotion occurs, as this is typically where there is the most interest.
                </p>

                <div className='flex gap-5 px-6'>
                    <div className='space-y-3 mt-3 w-full'>
                        <EditableTextarea label={"Bookshops/ Libraries*"} text={"Please provide a list of bookshops or libraries that are local to you. If you have none it may be a good idea to go inside your local shops and begin to develop relationships."} rows={8} />
                        <p className="text-lg font-normal mt-2">
                            The next two questions are about outlets specific to you or your book
                        </p>
                        <EditableTextarea label={"Contacts*"} text={"Do you have any media experience or contacts that would be helpful in the promotion of your book? If so, please describe below and if possible provide contact details (preferably an email address)."} rows={8} />

                        <p className="text-lg font-normal mt-2">
                            This section aims to help you with your own promotional efforts. Our most successful authors are those who do a lot of work themselves. Advice and support will be given any time that your book is in publication, so if you are unsure of anything please visit the Author Hub or contact your publicist.
                        </p>

                        <p className="text-lg font-normal">
                            Do you have any of the following?
                        </p>
                        <p className="text-lg font-normal italic text-gray-500">
                            Please add the link to your website/ profiles. If you do not have any of the following, it would be best to set some up as online promotion is one of the most effective promotional platforms.
                        </p>

                        <InputWithLabel label={"Website"} />
                        <InputWithLabel label={"Facebook"} />
                        <InputWithLabel label={"Twitter"} />
                        <InputWithLabel label={"Instagram"} />
                        <InputWithLabel label={"Youtube"} />
                        <EditableTextarea label={"Do you have any further ideas for promotion?"} rows={8} />

                    </div>
                    <div className='space-y-3 mt-3 w-full'>
                        <EditableTextarea label={"Media list**"} text={"Please name any local newspapers, radio stations and magazines you think would be interested in featuring your book?"} rows={8} />
                        <EditableTextarea label={"Who else might be interested in featuring your book?*"} font='mt-2' text={"If applicable, please provide details of any other outlets that may be interested in your book, e.g. organisations/magazines relevant to your book topic, locations where your book is set etc."} rows={8} />

                        <EditableRadio label={"Are you willing to do promotional events?*"} text={"For example book signings, radio or newspaper interviews etc. If your answer is no please specify the reason(s)."} />

                        <EditableRadio label={"Medical conditions"} text={"Do you have any reasons or concerns that would make events difficult such as physical impairments, difficulty travelling, anxieties etc.? If your answer is yes please provide details below so we can do our best to accommodate them and/or provide additional support."} />
                        <EditableRadio label={"Are you happy to share your contact details?"} text={"Can we pass on your contact details to bookshops and the media? These will not be publicly displayed or uploaded anywhere, and will only be given to individual outlets that have shown an interest in speaking to you."} />
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <Button title={"Previous"} text={"text-white"} bg='bg-gray-400' width={"w-[130px]"} onClick={prev} />
                    <Button title={"Submit Now"} text={"text-white"} bg='bg-green-600' width={"w-[130px]"} />
                </div>
            </div>
        </div>
    )
}

export default STEP3