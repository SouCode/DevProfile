import router from 'next/router';
import React from 'react';
import { useRouter } from 'next/router';  // Import useRouter

const About: React.FC = () => {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen bg-white relative border-r-8 border-black">
      <div className="absolute top-6 left-5 w-20% h-1/3 flex items-center justify-center">
        <img src="/SouPicFrame.svg" alt="Sou Pic Frame" className="w-[100%] h-[100%]" />
      </div>

      <div className="border-black bg-white absolute flex items-center justify-center p-4 top-6 left-400 transform -translate-x-50%" style={{ width: '60%', height: '35%', borderTopWidth: '8px', borderLeftWidth: '8px', borderBottomWidth: '8px', borderRightWidth: '8px' }}>
        <p>Your paragraph content here...</p>
      </div>

      <div className="absolute flex items-center justify-center p-1 rounded-lg" style={{ top: '40vh', left: '3%', width: '90%', height: '40%' }}>
        <img src="/tools.svg" alt="Tools" className="w-half h-full rounded-lg" />
      </div>


      <div className="absolute flex items-center justify-center p-1 rounded-lg" style={{ top: '78vh', left: '1vw', width: '44vw', height: '20vh' }}>
        <img src="/Certification.svg" alt="Certifications" className="w-full h-full" />
      </div>

      <div className="absolute flex items-center justify-center p-1 rounded-lg cursor-pointer" style={{ top: '79vh', left: '59vw', width: '45vw', height: '16vh' }} onClick={() => { scrollToSection("#work"); void router.push("/#work"); }}>
        <img src="/ToBeContinued.svg" alt="To Be Continued" className="w-full h-full" />
      </div>


    </div>
  );
}

export default About;
