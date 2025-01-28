import { Roboto_Mono } from 'next/font/google';
import "./globals.css";

const robotoMono = Roboto_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'], 
  display: 'swap',               
  variable: '--font-roboto-mono'
});

export const metadata = {
  title: "Login page",
  description: "Login page for BSternAI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={robotoMono.className}
      >
        {children}
      </body>
    </html>
  );
}
