import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <img src="/copyright.svg" alt="Copyright" className="inline-block w-4 h-4 mr-2" />
        <span>Made by SouCode 2023</span>
        <div className="mt-4 space-x-4">
          <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedinLogo.svg" alt="LinkedIn" className="inline-block w-6 h-6" />
          </a>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <img src="/githubLogo.svg" alt="GitHub" className="inline-block w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
