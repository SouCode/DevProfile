import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import Head from 'next/head';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-[#9B9A9A] min-h-screen"> {/* This sets the background color */}
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
