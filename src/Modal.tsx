import React from 'react';
import ContactForm from './ContactForm.tsx'; // Import ContactForm component

type Props = {
    id: string[];
    open: boolean;
    onClose: () => void;
};

const Modal = (props: Props) => {
    if (!props.open) return null; // Return null if the modal is not open

    return (
        <div
            onClick={props.onClose}
            className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50"
        >
            <div
                onClick={(e) => {
                    e.stopPropagation(); // Prevent closing modal when clicking inside
                }}
                className="max-w-2xl w-full bg-white rounded-lg p-6"
            >
                {/* Render the ContactForm component */}
                <ContactForm id={props.id} onClose={props.onClose}/>
            </div>
        </div>
    );
};

export default Modal;