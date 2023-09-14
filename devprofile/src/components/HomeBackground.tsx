import React from 'react';

const HomeBackground: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-end bg-custom-gray">
      <img 
        src="/SouBackground.svg" 
        alt="Background Image" 
        className="transform md:scale-70 object-contain w-full md:w-auto"
      />
    </div>
  );
}

export default HomeBackground;
