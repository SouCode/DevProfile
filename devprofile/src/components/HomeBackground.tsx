import React from 'react';

const HomeBackground: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-end bg-black">
      <img
        src="/SouBackground.svg"
        alt="Background Image"
        className="transform md:scale-70 object-contain w-full md:w-auto"
      />
      <div className="absolute top-[810px] left-0 w-full h-[20px] bg-black"></div>
    </div>
  );
}

export default HomeBackground;
