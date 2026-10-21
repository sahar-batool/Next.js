import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      <body className="text-center">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
