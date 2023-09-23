import { AppProps } from 'next/app';
import "~/styles/globals.css";
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div className="bg-[#9B9A9A] min-h-screen"> {/* This sets the background color */}
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
