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
    <div className="absolute text-white" style={{ top: `calc(20px + ${offsetTop})`, ...leftStyle, ...rightStyle }}>
      <h1 className="text-4xl font-bold ml-[-2%]" style={{ width: '507.4px', height: '83.86px' }}>
        Welcome to my Portfolio. I am a full-Stack developer.
      </h1>
      <p className="mt-4 ml-[-1%]" style={{ width: '437.48px', height: '99.84px' }}>
        I enjoy coding as it lets me channel my creativity, while also presenting a challenge of crafting something both inspiring and valuable for others.
      </p>

      {/* SocialBox SVG */}
      <div
        className="absolute flex justify-center items-center"
        style={{
          top: '145.5%',
          left: '26%',
          transform: 'translate(-50%, -50%)',
          width: '20vw',
          height: '30vh',
        }}
      >
        <img src="/SocialBox.svg" alt="Social Box" className="w-full h-full" />

        {/* SVG Buttons */}
        <a href="https://github.com/SouCode" target="_blank" rel="noopener noreferrer">
          <img src="/githubLogo.svg" alt="GitHub" className="absolute w-1/4 h-1/4" style={{ top: '55%', left: '20%', transform: 'translate(-50%, -50%)' }} />
        </a>
        <a href="https://www.linkedin.com/in/john-s-3bb74816b" target="_blank" rel="noopener noreferrer">
          <img src="/linkedinLogo.svg" alt="LinkedIn" className="absolute w-1/4 h-1/4" style={{ top: '54%', left: '52%', transform: 'translate(-50%, -50%)' }} />
        </a>
        <a href="https://www.codewars.com/users/SouCode" target="_blank" rel="noopener noreferrer">
          <img src="/codewarsLogo.svg" alt="CodeWars" className="absolute w-1/3 h-1/3" style={{ top: '58%', right: '15%', transform: 'translate(50%, -50%)' }} />
        </a>
      </div>

      <div className="mt-10 absolute" style={{ top: '190%', left: '0' }}>
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
// revamp soom