import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import Head from 'next/head';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css" />
  <script src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"></script>
      </Head>
      <div className="bg-[#9B9A9A] min-h-screen"> {/* This sets the background color */}
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
