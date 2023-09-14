import router from 'next/router';
import React from 'react';
import { useRouter } from 'next/router';  // Import useRouter


const About: React.FC = () => {
  const router = useRouter();  // Use the useRouter hook

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen bg-white relative border-r-8 border-black">
      <div
        className="absolute top-2 left-13 w-[538.5px] h-[304.11px] flex items-center justify-center"
      >
        <img src="/SouPicFrame.svg" alt="Sou Pic Frame" className="w-[90%] h-[90%]" />
      </div>

      {/* About Me Box */}
      <div
        className="border-black  bg-white absolute flex items-center justify-center p-4"
        style={{
          top: '25px',
          left: '545.5px',
          width: '820px',
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
        className="absolute flex items-center justify-center p-1 rounded-lg"
        style={{
          top: '320px',
          left: '13px',
          width: '1226px',
          height: '266px',
        }}
      >
        <img src="/tools.svg" alt="Tools" className="w-full h-full rounded-lg" />
      </div>

      {/* Certifications box */}
      <div
        className="absolute flex items-center justify-center p-1 rounded-lg"
        style={{
          top: '600px',
          left: '13px',
          width: '849.17px',
          height: '167.47px',
        }}
      >
        <img src="/Certification.svg" alt="Certifications" className="w-full h-full" />
      </div>

      {/* ToBeContinued box */}
      <div
        className="absolute flex items-center justify-center p-1 rounded-lg cursor-pointer"
        style={{
          top: '595px',
          left: '810px',
          width: '454.7px',
          height: '167.74px',
        }}
        onClick={() => {
          scrollToSection("#work");
          void router.push("/#work");
        }}
      >
        <img src="/ToBeContinued.svg" alt="To Be Continued" className="w-full h-full" />
      </div>


    </div>
  );
}

export default About;
