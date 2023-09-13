import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="bg-[#9B9A9A] min-h-screen"> {/* This sets the background color */}
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
