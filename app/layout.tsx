import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { siteConfig, addressParts } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const head = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--f-head" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--f-body" });

const title = "Mitsubishi Pajero Specialist & Auto Repairs | Jhansi Automobiles";
const description =
  "Mitsubishi Pajero and Pajero Sport service, automobile engineering, repairs and modern vehicle diagnostics in Visakhapatnam. Backed by 30+ years of experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: title, template: `%s | ${siteConfig.businessName}` },
  description,
  alternates: { canonical: `${siteConfig.url}/` },
  openGraph: { title, description, url: `${siteConfig.url}/`, type: "website", locale: "en_IN", siteName: siteConfig.businessName, images: ["/images/hero-workshop.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/hero-workshop.png"] },
};

export const viewport: Viewport = { themeColor: "#0B0F14", width: "device-width", initialScale: 1 };

const ld = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.businessName,
  url: siteConfig.url,
  telephone: `+91${siteConfig.phone}`,
  email: siteConfig.email,
  image: `${siteConfig.url}/images/logo.png`,
  description,
  address: { "@type": "PostalAddress", ...addressParts },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "20:00" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
