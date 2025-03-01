import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";
import SubNavbar from "./components/SubNavBar/SubNavBar";
import SearchBox from "./components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <SubNavbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
