import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import BackToTop from "./Components/BackToTop";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovoFont = Ovo({
  subsets: ["latin"],
  weight: ["400",],
});

export const metadata = {
  title: "Prema Rani Bhowmik",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfitFont.className} ${ovoFont.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
