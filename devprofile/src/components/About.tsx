import React from 'react';

const About: React.FC = () => {
    return (
        <div className="h-screen bg-white relative">
            <div
                className="absolute top-5 left-13 w-[538.5px] h-[304.11px] flex items-center justify-center"
            >
                <img src="/SouPicFrame.svg" alt="Sou Pic Frame" className="w-[90%] h-[90%]" />
            </div>
            {/* About Me Box */}
            <div
                className="border-black absolute flex items-center justify-center p-4"
                style={{
                    top: '35px',
                    left: '560.5px',
                    width: '846px',
                    height: '273px',
                    borderTopWidth: '4px',
                    borderLeftWidth: '4px',
                    borderBottomWidth: '4px',
                    borderRightWidth: '4px',
                }}
            >
                <p>Your paragraph content here...</p>
            </div>

        </div>
    );
}

export default About;
