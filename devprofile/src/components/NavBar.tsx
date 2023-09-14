import { useState } from 'react';
import { useRouter } from 'next/router';

const NavBar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navigateTo = (section: string) => {
    setIsOpen(false); // Close mobile menu when a link is clicked
    void router.push(section);
  };

  return (
    <div className="flex justify-between items-center w-full bg-white p-4 relative z-10">
      <img src="/SouCodeLogo.svg" alt="SouCode Logo" className="w-24 h-auto" />
      <div className="hidden md:flex space-x-4">
        <button onClick={() => navigateTo("#About")} className="text-gray-700 hover:text-black">
          About
        </button>
        <button onClick={() => navigateTo("#Work")} className="text-gray-700 hover:text-black">
          Work
        </button>
        <button onClick={() => navigateTo("#Contact")} className="text-gray-700 hover:text-black">
          Contact
        </button>
      </div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 md:hidden bg-white z-20">
          <button onClick={() => navigateTo("#About")} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-black">
            About
          </button>
          <button onClick={() => navigateTo("#Work")} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-black">
            Work
          </button>
          <button onClick={() => navigateTo("#Contact")} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-black">
            Contact
          </button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
