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
      <body className={`${manrope.variable} ${merriweather.variable} font-body antialiased`}>
        <a href="#main-content" className="skipLink">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
