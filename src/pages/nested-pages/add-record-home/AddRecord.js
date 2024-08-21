import Title from 'components/Title'
import React, { useState } from 'react'
import BookSection from './components/BookSection'
import AuthorModal from './components/AuthorModal'
import AuthorSection from './components/AuthorSection'
import FileUploadSection from './components/FileUploadSection'

const AddRecord = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="w-full m-4">
            <Title title=' Add New Record' />
            <div className="w-full space-y-6 mt-3">
                <AuthorSection onButtonClick={() => setModalOpen(true)} />
                <BookSection />
                <FileUploadSection />
                <AuthorModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSave={() => setModalOpen(false)} />
            </div>
        </div>
    )
}

export default AddRecord