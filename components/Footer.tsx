import Link from "next/link";
import { navLinks, tel, mailto, mapsUrl, hours, img, siteConfig as c } from "@/lib/site-config";
import { PhoneIcon, MailIcon, PinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <div className="foot-brand">
          <Link href="/" className="logo" aria-label={`${c.businessName} home`}>
            <img src={img.logo} alt={c.businessName} width={2083} height={755} loading="lazy" />
          </Link>
          <p>Professional automobile service and engineering solutions backed by 30+ years of experience.</p>
        </div>
        <div>
          <h2 className="foot-h">Navigation</h2>
          <nav aria-label="Footer navigation" className="foot-nav">
            {navLinks.map(({ label, href }) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        </div>
        <div>
          <h2 className="foot-h">Contact</h2>
          <a className="btn dark sm" href={tel}><PhoneIcon />CONTACT US</a>
          <ul className="foot-list">
            <li><MailIcon className="meta-icon" /><a href={mailto}>{c.email}</a></li>
            <li><PinIcon /><a href={mapsUrl} target="_blank" rel="noopener noreferrer">{c.address}</a></li>
          </ul>
        </div>
        <div>
          <h2 className="foot-h">Business Hours</h2>
          <dl className="hours">
            {hours.map((h) => <div key={h.days}><dt>{h.days}</dt><dd>{h.time}</dd></div>)}
          </dl>
        </div>
      </div>
      <p className="copy">© 2026 {c.businessName}. All Rights Reserved.</p>
    </footer>
  );
}
