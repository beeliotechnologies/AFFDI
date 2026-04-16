import "./globals.css";
import { Manrope, Merriweather } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://affdi.org"),
  title: "AFFDI | Alliance for Fundamental Development Initiative",
  description:
    "Community-focused NGO improving access to clean water, education, housing, and support for vulnerable families in Uganda.",
  openGraph: {
    title: "AFFDI | Alliance for Fundamental Development Initiative",
    description:
      "Community-focused NGO improving access to clean water, education, housing, and support for vulnerable families in Uganda.",
    type: "website",
    siteName: "AFFDI",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFFDI | Alliance for Fundamental Development Initiative",
    description:
      "Community-focused NGO improving access to clean water, education, housing, and support for vulnerable families in Uganda.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${merriweather.variable} relative bg-[#1a2a6c] font-body antialiased`}>
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#1565a8] opacity-35" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#29b6d8] opacity-15" />
          <div className="absolute right-[10%] top-1/2 h-32 w-32 rounded-full bg-[#2e7d32] opacity-20" />
        </div>
        <a href="#main-content" className="skipLink">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
