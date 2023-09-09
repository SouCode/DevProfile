import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4" style={{ width: '1153px', height: '100px' }}>
      <img src="/SouCodeLogo.svg" alt="SouCode Logo" />
      <div className="space-x-4">
        <Link href="#About" className="text-gray-700 hover:text-black">#About</Link>
        <Link href="#Work" className="text-gray-700 hover:text-black">#Work</Link>
        <Link href="#Contact" className="text-gray-700 hover:text-black">#Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
