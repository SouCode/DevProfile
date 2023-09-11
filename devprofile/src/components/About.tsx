import React from 'react';

const About: React.FC = () => {
    return (
        <div className="h-screen bg-white relative">
            <div
                className="absolute top-2 left-13 w-[538.5px] h-[304.11px] flex items-center justify-center"
            >
                <img src="/SouPicFrame.svg" alt="Sou Pic Frame" className="w-[90%] h-[90%]" />
            </div>
            {/* About Me Box */}
            <div
                className="border-black absolute flex items-center justify-center p-4"
                style={{
                    top: '25px',
                    left: '560.5px',
                    width: '800px',
                    height: '273px',
                    borderTopWidth: '4px',
                    borderLeftWidth: '4px',
                    borderBottomWidth: '4px',
                    borderRightWidth: '4px',
                }}
            >
                <p>Your paragraph content here...</p>
            </div>

            {/* Tools/Activity box */}
            <div
                className="absolute flex items-center justify-center p-1 rounded-lg"  // Reduced padding to p-1
                style={{
                    top: '320px',
                    left: '13px',  // Set to 13px
                    width: '1226px',
                    height: '266px',
                }}
            >
                <img src="/tools.svg" alt="Tools" className="w-full h-full rounded-lg" />

                {/*Figure out how to add Github activity */}
            </div>

            {/* Certifications box */}
            <div
                className="absolute flex items-center justify-center p-1 rounded-lg"  // Minimal padding
                style={{
                    top: '600px',
                    left: '13px',  // Position from Figma
                    width: '849.17px',
                    height: '167.47px',
                }}
            >
                <img src="/Certification.svg" alt="Certifications" className="w-full h-full" />
            </div>

            {/* ToBeContinued box */}
            <div
                className="absolute flex items-center justify-center p-1 rounded-lg"  // Minimal padding
                style={{
                    top: '595px',
                    left: '810px',  // Position from Figma
                    width: '454.7px',
                    height: '167.74px',
                }}
            >
                <img src="/ToBeContinued.svg" alt="To Be Continued" className="w-full h-full" />
            </div>



        </div>
    );
}

export default About;
