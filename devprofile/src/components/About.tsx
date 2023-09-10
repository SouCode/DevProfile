import React from 'react';

const About: React.FC = () => {
  return (
    <div className="h-screen bg-white relative">
      <div 
        className=" absolute top-5 left-13 w-[538.5px] h-[304.11px] flex items-center justify-center"
      >
        <img src="/SouPicFrame.svg" alt="Sou Pic Frame" className="w-[90%] h-[90%]" />
      </div>
      {/* Other content for the About section can go here */}
    </div>
  );
}

export default About;
