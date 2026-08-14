import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="bg-background px-4 py-16 text-white sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
        <div className="space-y-4">
          <div className="text-2xl font-semibold tracking-[0.12em] text-white">Four Stars Hotel</div>
          <p className="max-w-sm text-sm leading-7 text-text-light">
            A modern luxury retreat where every stay is thoughtfully curated for comfort, culture, and unforgettable moments.
          </p>
          <div className="flex items-center gap-3">
            <SocialIcon url="http://facebook.com/p/Four-Towers-Hotel-61551519773808/"  fgColor="#f8fafc" style={{ height: 32, width: 32 }} />
            <SocialIcon url="https://www.instagram.com/fourtowershotelandsuites?igsh=MXZiZmtyYm1xN2FveA==" fgColor="#f8fafc" style={{ height: 32, width: 32 }} />
            {/* <SocialIcon url="https://www.twitter.com" fgColor="#f8fafc" style={{ height: 32, width: 32 }} /> */}
            <SocialIcon url="https://www.linkedin.com" fgColor="#f8fafc" style={{ height: 32, width: 32 }} />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-accent">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-text-light">
            <li>
              <a href="#" className="transition hover:text-white">
                Rooms
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                Amenities
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-accent">
            Contact
          </h3>
          <div className="space-y-3 text-sm text-text-light">
            <p>No 10 liberation avenue off ukaegbu road ogborhill aba abia state nigeria</p>
            <p>hello@fourstarshotel.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-text-muted">
        © 2026 Four Tower Hotel. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
