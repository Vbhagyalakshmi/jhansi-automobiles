import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig as c, tel, mailto, mapsUrl, hours, bookingWhatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Jhansi Automobiles Engineering Works, Satya Nagar, Murali Nagar, Visakhapatnam. Open Monday – Saturday, 9:00 AM – 8:00 PM.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Get in Touch" title="CONTACT US" image="/images/workshop/service-bay.webp"
        lead="Call us, email us or send a service request — our team will get back to you." />
      <section className="sec" aria-labelledby="contact-title"><div className="wrap two contact-grid">
        <div>
          <h2 id="contact-title">CONTACT DETAILS</h2>
          <dl className="info">
            <dt>Business</dt><dd>{c.businessName}</dd>
            <dt>Experience</dt><dd>{c.experience}</dd>
            <dt>Phone</dt><dd><a className="inline-cta" href={tel}><PhoneIcon />CALL NOW</a></dd>
            <dt>Email</dt><dd><a href={mailto}>{c.email}</a></dd>
            <dt>Address</dt><dd><a href={mapsUrl} target="_blank" rel="noopener noreferrer">{c.address}</a></dd>
            <dt>Business Hours</dt>
            <dd><ul className="hours-list">{hours.map((h) => <li key={h.days}><span>{h.days}</span><b>{h.time}</b></li>)}</ul></dd>
          </dl>
          <div className="ctas">
            <a className="btn" href={tel}><PhoneIcon />CALL NOW</a>
            <a className="btn ghost" href={mailto}><MailIcon />EMAIL US</a>
            <a className="btn ghost" href={bookingWhatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />BOOK A SERVICE</a>
          </div>
        </div>
        <ContactForm />
      </div></section>
    </>
  );
}
