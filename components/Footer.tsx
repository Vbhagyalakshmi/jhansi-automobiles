import Link from "next/link";
import { navLinks, img, siteConfig as c } from "@/lib/site-config";

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
      </div>
      <p className="copy">© 2026 {c.businessName}. All Rights Reserved.</p>
    </footer>
  );
}
