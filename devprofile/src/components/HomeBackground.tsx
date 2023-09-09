import React from 'react';

const HomeBackground: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-end">
      <img 
        src="/SouBackground.svg" 
        alt="Background Image" 
        className="transform scale-70 object-contain"
      />
    </div>
  );
}

export default HomeBackground;
