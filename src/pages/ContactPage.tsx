import { SocialIcon } from "react-social-icons";

const address = "No 10 Liberation Avenue, off Ukaegbu Road, Ogborhill, Aba, Abia State, Nigeria";
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const contactItems = [
  {
    label: "Call us",
    value: "+234 708 666 1378",
    href: "tel:+2347086661378",
    icon: "☎",
  },
  {
    label: "Find us",
    value: address,
    href: mapUrl,
    icon: "⌖",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    url: "https://facebook.com/p/Four-Towers-Hotel-61551519773808/",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/fourtowershotelandsuites?igsh=MXZiZmtyYm1xN2FveA==",
  },
  {
    label: "WhatsApp",
    url: "https://wa.me/2347086661378",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-260px)] bg-background px-4 pb-24 pt-32 text-white sm:px-6 md:px-8 lg:px-12">
      <section className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          Contact
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          We would love to hear from you.
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-text-light sm:text-base">
          Reach Four Towers Hotel through the channel that suits you best.
        </p>

        <div className="mt-12 grid w-full gap-5 md:grid-cols-2">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Find us" ? "_blank" : undefined}
              rel={item.label === "Find us" ? "noopener noreferrer" : undefined}
              className="group flex min-h-40 flex-col items-center justify-center rounded-2xl border border-white/10 bg-surface/70 px-6 py-8 transition hover:-translate-y-1 hover:border-accent/60 hover:bg-surface"
            >
              <span className="mb-4 text-3xl text-accent" aria-hidden="true">
                {item.icon}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
                {item.label}
              </span>
              <span className="mt-3 max-w-md text-sm leading-6 text-text-light group-hover:text-white">
                {item.value}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
            Follow Four Towers
          </p>
          <div className="mt-5 flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <SocialIcon
                key={social.label}
                url={social.url}
                aria-label={social.label}
                fgColor="#f8fafc"
                style={{ height: 42, width: 42 }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
