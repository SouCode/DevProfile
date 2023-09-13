import React from 'react';
import { useRouter } from 'next/router';

interface HomeHeaderProps {
  offsetTop?: string;    // Adjusts the vertical position
  offsetLeft?: string;   // Adjusts the left position
  offsetRight?: string;  // Adjusts the right position (if you want to position from the right side)
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ offsetTop = '0px', offsetLeft = '0px', offsetRight }) => {
  const router = useRouter();

  const scrollToSection = (section: string) => {
    void router.push(section);
  };

  const leftStyle = offsetRight ? {} : { left: `calc(16px + ${offsetLeft})` };
  const rightStyle = offsetRight ? { right: offsetRight } : {};

  return (
    <div className="absolute " style={{ top: `calc(20px + ${offsetTop})`, ...leftStyle, ...rightStyle }}>
      <h1 className="text-4xl font-bold" style={{ width: '507.4px', height: '83.86px' }}>
        Welcome to my Portfolio. I am a full-Stack developer.
      </h1>
      <p className="mt-4" style={{ width: '437.48px', height: '99.84px' }}>
        I enjoy coding as it lets me channel my creativity, while also presenting a challenge of crafting something both inspiring and valuable for others.
      </p>
      <div className="mt-10">
        <button 
          onClick={() => scrollToSection("#about")}
          style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer' }}
        >
          <img src="/HeaderAnchor.svg" alt="Anchor Button" style={{ width: '61px', height: '61px' }} />
        </button>
      </div>
    </div>
  );
}

export default HomeHeader;
