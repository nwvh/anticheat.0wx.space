import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "WX AntiCheat",
  description: "The only AntiCheat you'll ever need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
