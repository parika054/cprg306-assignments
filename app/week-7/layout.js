import ".././globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"]},["bg-slate-950"]);

export const metadata = {
  title: "Week 7 - Shopping List App",
};

export default function RootLayout({ children }) {
  return (
      <span className={inter.className}>{children}</span>
  );
}