import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="h-screen bg-white relative border-r-8 border-black">
            {/* ContactForm SVG */}
            <div
                className="absolute flex items-center justify-center"
                style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '737.72px',
                    height: '485.67px',
                }}
            >
                <img src="/ContactForm.svg" alt="Contact Form" className="w-full h-full" />
            </div>
        </div>
    );
}

export default Contact;
