import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': '#BBC5C2',
        
      },
    },
  },
  plugins: [],
};

export default config;
