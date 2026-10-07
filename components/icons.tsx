type IconProps = { className?: string };
const base = { "aria-hidden": true, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function WhatsAppIcon({ className = "btn-icon" }: IconProps) {
  return <svg className={className} {...base}>
    <path d="M20.1 11.7a8.1 8.1 0 0 1-11.9 7.1L4 20l1.2-4.1A8.1 8.1 0 1 1 20.1 11.7Z" />
    <path d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .6.6 1 1.4 1.7 2.4 2.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.3.6-.1.5-.4 1.1-.8 1.4-.5.4-1.1.6-1.8.5-1-.1-2.3-.7-3.5-1.7-1.3-1.1-2.2-2.5-2.5-3.5-.3-1.2.1-2.2.6-2.8Z" />
  </svg>;
}
export function PhoneIcon({ className = "btn-icon" }: IconProps) {
  return <svg className={className} {...base}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" /></svg>;
}
export function MailIcon({ className = "btn-icon" }: IconProps) {
  return <svg className={className} {...base}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}
export function ArrowIcon({ className = "btn-icon" }: IconProps) {
  return <svg className={className} {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}
export function ChevronIcon({ className = "btn-icon", dir = "right" }: IconProps & { dir?: "left" | "right" }) {
  return <svg className={className} {...base}><path d={dir === "left" ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"} /></svg>;
}
export function PinIcon({ className = "meta-icon" }: IconProps) {
  return <svg className={className} {...base}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>;
}
export function ClockIcon({ className = "meta-icon" }: IconProps) {
  return <svg className={className} {...base}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
}
export function MenuIcon({ open, className = "btn-icon" }: IconProps & { open: boolean }) {
  return <svg className={className} {...base}>{open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>;
}
