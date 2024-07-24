import Button from 'components/Button';
import React, { useState } from 'react';

const ImageUploader = ({ onImageUpload }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
            if (onImageUpload) {
                onImageUpload(file);
            }
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        setPreviewUrl(null);
        if (onImageUpload) {
            onImageUpload(null);
        }
    };

    return (
        <div className="image-uploader w-full shadow-md bg-[#F7F7F7] my-2 p-2 mt-6">
            {previewUrl ? (
                <div className="preview">
                    <img src={previewUrl} alt="Image Preview" className="preview-img" />
                    <Button onClick={handleRemoveImage} title={"Remove"} bg='bg-red-500' text={"text-white m-2"} />
                </div>
            ) : (
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input"
                />
            )}
        </div>
    );
};

export default ImageUploader;
