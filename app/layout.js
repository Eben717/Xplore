import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Xplore | Next-Generation Solutions",
  description: "Xplore specializes in Accounting, Taxation, Cybersecurity, AI, IT support, Networking and Software Development services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased selection:bg-blue-500/30`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LenisProvider>
            <Navbar />
            {children}
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
