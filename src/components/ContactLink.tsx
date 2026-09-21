import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

/**
 * Public-facing contact link. Shows CONTACT_EMAIL (mailto) once it is set in
 * site-config; until then it points to the on-site contact form instead of
 * exposing a personal address.
 */
export function ContactLink({ className, fallbackLabel = "Contact us" }: { className?: string; fallbackLabel?: string }) {
  const email = SITE_CONFIG.contactEmail;
  if (email) {
    return (
      <a href={`mailto:${email}`} className={className}>
        {email}
      </a>
    );
  }
  return (
    <Link href="/contact" className={className}>
      {fallbackLabel}
    </Link>
  );
}
