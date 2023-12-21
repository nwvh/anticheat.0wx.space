import { Montserrat } from "next/font/google";
import Head from 'next/head'; // Import the Head component
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
      <Head>
        <meta content="WX AntiCheat" property="og:title" />
        <meta content='"The only anticheat you will ever need". The official website for WX AntiCheat, an advanced and affordable FiveM AntiCheat." property="og:description' />
        <meta content="https://anticheat.0wx.space" property="og:url" />
        <meta content="https://media.discordapp.net/attachments/1134103622423154751/1187454603420246096/wxaclogo.png" property="og:image" />
        <meta content="#C4B5FD" data-react-helmet="true" name="theme-color" />
      </Head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
