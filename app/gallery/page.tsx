import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import { ContactCta } from "@/components/sections";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from the Jhansi Automobiles Engineering Works workshop in Visakhapatnam — service bays, diagnostics, engine repair and more.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero kicker="Inside the Workshop" title="GALLERY" image="/images/workshop/workshop-vehicles.webp"
        lead="A look at our workshop, service bays and the work we carry out every day." />
      <section className="sec" aria-label="Workshop photos"><div className="wrap"><Gallery /></div></section>
      <ContactCta />
    </>
  );
}
