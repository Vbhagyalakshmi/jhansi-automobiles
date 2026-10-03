import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
const head = Barlow_Condensed({ subsets:["latin"], weight:["500","600","700"], variable:"--f-head" });
const body = IBM_Plex_Sans({ subsets:["latin"], weight:["400","500"], variable:"--f-body" });
const title = "Jhansi Automobiles Engineering Works | Automobile Service & Engineering";
const description = "Jhansi Automobiles Engineering Works — professional automobile service and engineering solutions backed by 15 years of experience.";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description, icons:{ icon:"/icon.svg" },
  openGraph:{ title, description, type:"website", siteName: siteConfig.businessName, images:["/images/hero-workshop.png"] },
};
const ld = { "@context":"https://schema.org", "@type":"AutomotiveBusiness", name:siteConfig.businessName, telephone:siteConfig.phone, email:siteConfig.email, description };
export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (<html lang="en" className={`${head.variable} ${body.variable}`}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}} />
    {children}</body></html>);
}
