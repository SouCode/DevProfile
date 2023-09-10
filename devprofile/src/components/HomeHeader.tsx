import React from 'react';

interface HomeHeaderProps {
  offsetTop?: string;    // Adjusts the vertical position
  offsetLeft?: string;   // Adjusts the left position
  offsetRight?: string;  // Adjusts the right position (if you want to position from the right side)
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ offsetTop = '0px', offsetLeft = '0px', offsetRight }) => {
  const leftStyle = offsetRight ? {} : { left: `calc(16px + ${offsetLeft})` };
  const rightStyle = offsetRight ? { right: offsetRight } : {};

  return (
    <div className="absolute" style={{ top: `calc(20px + ${offsetTop})`, ...leftStyle, ...rightStyle }}>
      <h1 className="text-4xl font-bold" style={{ width: '507.4px', height: '83.86px' }}>
        Welcome to my Portfolio. I am a full-Stack developer.
      </h1>
      <p className="mt-4" style={{ width: '437.48px', height: '99.84px' }}>
        I enjoy coding as it lets me channel my creativity, while also presenting a challenge of crafting something both inspiring and valuable for others.
      </p>
      <div className="mt-10">
        <img src="/HeaderAnchor.svg" alt="Anchor Button" style={{ width: '61px', height: '61px' }} />
      </div>
    </div>
  );
}

export default HomeHeader;
