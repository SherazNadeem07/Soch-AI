import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../Redux/Provider/provider";
import ThemeWrapper from "./components/globalcomponents/ThemeWrapper"; // 👈 add this line

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Soch AI',
  description: 'Your AI companion',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <Providers>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </Providers>
      </body>
    </html>
  );
}

