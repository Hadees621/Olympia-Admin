import React, { useState } from 'react'
import BookSection from './components/BookSection'
import AuthorModal from './components/AuthorModal'
import AuthorSection from './components/AuthorSection'
import FileUploadSection from './components/FileUploadSection'

const AddRecord = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleAddAuthorClick = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };
    const handleSaveAuthor = () => {
        setModalOpen(false);
    };
    return (

        <div className="w-full">
            <p className="text-3xl font-semibold mt-8 ml-6">
                Add New Record
            </p>
            <div className="p-4 w-full space-y-6">
                <AuthorSection onButtonClick={handleAddAuthorClick} />
                <BookSection />
                <FileUploadSection />
                <AuthorModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveAuthor} />
            </div>
        </div>
    )
}

export default AddRecord