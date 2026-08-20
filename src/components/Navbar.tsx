import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Rooms",
    href: "/rooms",
  },
  {
    name: "Amenities",
    href: "/amenities",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const message = `Hi, I’m interested in booking a stay at your hotel.

Could you please share the available rooms, prices, and booking details?

  Check-in date: [Please specify]
  Check-out date: [Please specify]
  Number of guests: [Please specify]

Thank you!`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 text-slate-900  shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-12">
        <NavLink
          to="#"
          className={`text-base font-semibold tracking-[0.2em] uppercase sm:text-lg sm:tracking-[0.3em] `}
        >
          Four Tower Hotel
        </NavLink>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-white"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
          href={`https://wa.me/2347086661378?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden rounded-full hover:cursor-pointer px-4 py-2 text-sm font-semibold transition sm:inline-flex ${
              scrolled
                ? "bg-slate-900 text-white hover:bg-slate-700"
                : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
            }`}
          >
            Book Now
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`rounded-full p-2 transition md:hidden ${
              scrolled
                ? "bg-slate-100 text-slate-900"
                : "bg-white/20 text-white backdrop-blur-sm"
            }`}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-2 transition hover:bg-white/10 ${
                    isActive ? "text-primary" : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href={`https://wa.me/2347086661378?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-950"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
