import React, { useState } from 'react'
import AuthorSection from './components/AuthorSection'
import BookSection from './components/BookSection'
import FileUploadSection from './components/FileUploadSection'
import AuthorModal from './components/AuthorModal'

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
    const onblur = () => {
        setModalOpen(false);
    }
    return (

        <div className="w-full">
            <p className="text-3xl font-semibold mt-8 ml-6">
                Add New Record
            </p>
            <div className="p-4 w-full space-y-6">
                <AuthorSection onButtonClick={handleAddAuthorClick} />
                <BookSection />
                <FileUploadSection />
                <AuthorModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveAuthor} onblur={onblur} />
            </div>
        </div>

    )
}

export default AddRecord