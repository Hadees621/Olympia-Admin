import React from 'react';
import Modal from 'components/modals/Modal';
import DisplayInfo from 'pages/card-payments/components/DisplayInfo';

const ViewModal = ({ isVisible, onClose, rowData }) => {
    return (
        <Modal
            isVisible={isVisible}
            onClose={onClose}
            onSave={onClose}
            width="max-w-[70vh]"
            title="Telephone Payment Record"
        >
            <div className="w-full shadow">
                <div className="overflow-y-auto max-h-[70vh] custom-scrollbar p-6">
                    <div className="mb-4 space-y-2">
                        {Object.entries(rowData).map(([key, value]) => (
                            <DisplayInfo key={key} label={key} value={value} />
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ViewModal;


// import React from 'react'
// import Modal from 'components/modals/Modal'
// import DisplayInfo from 'pages/card-payments/components/DisplayInfo'

// const ViewModal = ({ isVisible, onClose, personalInformation }) => {
//     return (
//         <Modal
//             isVisible={isVisible}
//             onClose={onClose}
//             onSave={onClose}
//             width="max-w-[70vh]"
//             title="Telephone Payment Record"
//         >
//             <div className="w-full shadow">
//                 <div className="overflow-y-auto max-h-[70vh] custom-scrollbar p-6">
//                     {personalInformation.map((item, index) => (
//                         <div key={index} className="mb-4 space-y-2">
//                             {Object.entries(item).map(([key, value]) => (
//                                 <DisplayInfo key={key} label={key} value={value} />
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </Modal>
//     )
// }

// export default ViewModal