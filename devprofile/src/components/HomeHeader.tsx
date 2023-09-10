import React from 'react';

const HomeHeader: React.FC = () => {
  return (
    <div className="absolute top-20 left-16"> {/* Adjusted for the top and left values you provided */}
      <h1 className="text-4xl font-bold" style={{ width: '507.4px', height: '83.86px' }}>
        Welcome to my Portfolio. I am a full-Stack developer.
      </h1>
      <p className="mt-4" style={{ width: '437.48px', height: '99.84px' }}>
        I enjoy coding as it lets me channel my creativity, while also presenting a challenge of crafting something both inspiring and valuable for others.
      </p>
    </div>
  );
}

export default HomeHeader;
