import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designing Solutions | IT & Telecom Experts",
  description: "Leading IT and Telecom experts offering innovative solutions for businesses. Explore our services to drive your success.",
  keywords: "IT solutions, Telecom experts, business solutions, innovative IT services, telecom services, technology experts",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Designing Solutions | IT & Telecom Experts",
    description: "Discover how Designing Solutions can revolutionize your business with cutting-edge IT and Telecom solutions.",
    type: "website",
    url: "https://designingsolutions.co.in/", // Update with your website URL
    images: [
      {
        url: "/ogimage.png", // Update with your OG image URL
        width: 520,
        height: 520,
        alt: "Designing Solutions - IT & Telecom Experts",
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
