"use client";
import { useState } from "react";
import { services, whatsappUrl } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";

function Field({ n, l, t = "text", req, err, auto }: { n: string; l: string; t?: string; req?: boolean; err?: string; auto?: string }) {
  return (
    <label>{l}{req && " *"}
      <input name={n} type={t} autoComplete={auto} aria-invalid={!!err} aria-required={req || undefined} aria-describedby={err ? `${n}-err` : undefined} />
      <em id={`${n}-err`}>{err}</em>
    </label>
  );
}

export default function ContactForm() {
  const [err, setErr] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const x: Record<string, string> = {};
    if (!d.name?.trim()) x.name = "Please enter your name.";
    if (!/^[+]?[0-9\s-]{10,14}$/.test(d.phone?.trim() || "")) x.phone = "Please enter a valid 10-digit phone number.";
    if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) x.email = "Please enter a valid email address.";
    if (!d.vehicle?.trim()) x.vehicle = "Please enter your vehicle make and model.";
    if (!d.service) x.service = "Please choose a service.";
    setErr(x);
    if (Object.keys(x).length) return;
    const body = `Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nVehicle: ${d.vehicle}\nService: ${d.service}\n\n${d.message}`;
    window.open(whatsappUrl(`Hello Jhansi Automobiles Engineering Works, I would like to book a service.\n\n${body}`), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form id="form" className="form-card" noValidate onSubmit={submit} aria-labelledby="form-title">
      <h2 id="form-title" className="form-title">Book a Service</h2>
      <Field n="name" l="Name" req err={err.name} auto="name" />
      <Field n="phone" l="Phone" t="tel" req err={err.phone} auto="tel" />
      <Field n="email" l="Email" t="email" err={err.email} auto="email" />
      <Field n="vehicle" l="Vehicle" req err={err.vehicle} />
      <label>Service Required *
        <select name="service" defaultValue="" aria-invalid={!!err.service} aria-required aria-describedby={err.service ? "service-err" : undefined}>
          <option value="" disabled>Select a service</option>
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Other</option>
        </select>
        <em id="service-err">{err.service}</em>
      </label>
      <label>Message<textarea name="message" rows={4} /></label>
      <button className="btn" type="submit"><WhatsAppIcon />REQUEST SERVICE</button>
      {sent && <p className="ok" role="status">WhatsApp will open with your service request ready to send.</p>}
    </form>
  );
}
