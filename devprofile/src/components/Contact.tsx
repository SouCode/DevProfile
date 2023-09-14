import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="h-screen bg-6A787E relative flex flex-col items-center pt-10" id="contact">
            <h1 className="text-center text-4xl mt-10">Contact Me</h1>
            
            {/* ContactForm SVG */}
            <div
                className="flex items-center justify-center"
                style={{
                    width: '737.72px',
                    height: '485.67px',
                    marginTop: '153.96px',
                    marginLeft: '17.52px',
                }}
            >
                <img src="/ContactForm.svg" alt="Contact Form" className="w-full h-full" />
            </div>
        </div>
    );
}

export default Contact;
