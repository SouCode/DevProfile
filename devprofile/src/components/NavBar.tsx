import { useRouter } from 'next/router';

const NavBar: React.FC = () => {
  const router = useRouter();

  const navigateTo = (section: string) => {
    void router.push(section);
  };

  return (
    <div className="flex justify-between items-center w-full bg-white p-4">
      <img src="/SouCodeLogo.svg" alt="SouCode Logo" />
      <div className="space-x-4" style={{ width: '827px', justifyContent: 'flex-end', display: 'flex' }}>
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
    </div>
  );
}

export default NavBar;
