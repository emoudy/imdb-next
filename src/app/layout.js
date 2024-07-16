import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";
import SubNavbar from "./components/SubNavBar/SubNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "This is a movie database clone",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <SubNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout
