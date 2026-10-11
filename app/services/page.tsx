import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { ContactCta, Reveal } from "@/components/sections";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { services, tel, whatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Automobile Services & Repairs",
  description: "Explore car servicing, engine diagnostics and repair, brakes, suspension, AC, electrical and mechanical engineering services in Visakhapatnam.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Automobile Services & Repairs",
    description: "Explore car servicing, engine diagnostics and repair, brakes, suspension, AC, electrical and mechanical engineering services in Visakhapatnam.",
    url: "/services",
  },
  twitter: {
    title: "Automobile Services & Repairs",
    description: "Explore car servicing, engine diagnostics and repair, brakes, suspension, AC, electrical and mechanical engineering services in Visakhapatnam.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero kicker="What We Do" title="OUR SERVICES" image="/images/workshop/engine-repair.jpeg"
        lead="Professional automobile service and engineering solutions backed by 30+ years of experience." />
      <section className="sec" aria-labelledby="all-services-title"><div className="wrap">
        <h2 id="all-services-title">ALL SERVICES</h2>
        <div className="svc-grid">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <article id={s.slug} className="svc">
                <Photo src={s.image} alt={s.title} className="svc-img" />
                <div className="svc-b">
                  <i>{String(i + 1).padStart(2, "0")}</i>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <div className="svc-actions">
                    <a className="btn sm" href={tel}><PhoneIcon />CONTACT US</a>
                    <a className="btn ghost sm" href={whatsappUrl(`Hello Jhansi Automobiles Engineering Works, I would like to book the following service: ${s.title}. Please share the available appointment details.`)} target="_blank" rel="noopener noreferrer" aria-label={`Book ${s.title} on WhatsApp`}><WhatsAppIcon />BOOK</a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div></section>
      <ContactCta />
    </>
  );
}
