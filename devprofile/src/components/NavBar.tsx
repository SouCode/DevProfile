import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <div className="relative w-full h-52 bg-white flex items-center">
      <img src="/SouCodeLogo.svg" alt="SouCode Logo" className="absolute" style={{ top: '14px', left: '82px' }} />
      <div className="ml-auto space-x-4">
        <Link href="#About"><a className="text-gray-700 hover:text-black" style={{ top: '20px', left: '935px' }}>About</a></Link>
        <Link href="#Work"><a className="text-gray-700 hover:text-black" style={{ top: '20px', left: '1073px' }}>Work</a></Link>
        <Link href="#Contact"><a className="text-gray-700 hover:text-black" style={{ top: '20px', left: '1165px' }}>Contact</a></Link>
      </div>
    </div>
  );
}

export default NavBar;
