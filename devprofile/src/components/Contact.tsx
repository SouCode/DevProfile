import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="h-screen bg-white relative border-r-8 border-black" id="contact">
            {/* ContactForm SVG */}
            <div
                className="absolute flex items-center justify-center"
                style={{
                    top: '50%',
                    left: '30%',
                    transform: 'translate(-50%, -50%)',
                    width: '70vw',  // Adjust as needed
                    height: '70vh', // Adjust as needed
                }}
            >
                <img src="/ContactForm.svg" alt="Contact Form" className="w-full h-full" />
            </div>
        </div>
    );
}

export default Contact;
