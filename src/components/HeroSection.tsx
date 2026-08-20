import { motion } from "framer-motion";
import { useState } from "react";
import DatePicker from "./DatePicker";
import GuestsPicker from "./GuestsPicker";
import Banner from "../assets/image/image.png"

interface HeroSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCta?: string;
  secondaryCta?: string;
  backgroundImage?: string;
  navItems?: string[];
  showBookingWidget?: boolean;
  showPrimaryCta?: boolean;
}

function HeroSection({
  eyebrow = "Urban Luxury Retreat",
  title = "A cinematic stay in the heart of elegance.",
  description = "Discover sculpted architecture, timeless service, and unforgettable views at Four Tower Hotel.",
  primaryCta = "Explore Suites",
  backgroundImage = Banner,
  showBookingWidget = true,
  showPrimaryCta = true,
}: HeroSectionProps) {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2");

  const message = `Hi, I’m interested in booking a stay at your hotel.

Could you please share the available rooms, prices, and booking details?

  Check-in date: ${arrival ? arrival : "[Please specify]"}
  Check-out date: ${departure ? departure : "[Please specify]"}
  Number of guests: ${guests}

Thank you!`;

  return (
    <div className="min-h-screen bg-background text-white">
      <main className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-24 sm:px-6 sm:py-28 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm sm:tracking-[0.4em]">
              {eyebrow}
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-7xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-light sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              {description}
            </p>
            {showPrimaryCta && (
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href="/rooms"
                  className="rounded-full bg-primary-light px-6 py-3 text-sm font-semibold text-dark transition hover:bg-primary-dark"
                >
                  {primaryCta}
                </a>
              </div>
            )}

            {showBookingWidget && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="mt-12 rounded-xl bg-white/10 p-4 backdrop-blur-xl sm:mt-16 sm:p-6"
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-3">
                  {/* Arrival */}
                  <DatePicker
                    value={arrival}
                    onChange={setArrival}
                    label="Arrival"
                    icon="📅"
                  />

                  {/* Departure */}
                  <DatePicker
                    value={departure}
                    onChange={setDeparture}
                    label="Departure"
                    icon="📅"
                    minDate={arrival}
                  />

                  {/* Guests */}
                  <GuestsPicker value={guests} onChange={setGuests} icon="👥" />
                </div>

                {/* Book Now Button */}

                <a
                  href={`https://wa.me/2347086661378?text=${encodeURIComponent(message)}`}
                  target="_blank"
                >
                  <button className="mt-4 w-full rounded-lg bg-secondary-dark px-6 py-3.5 font-semibold text-white shadow-lg shadow-secondary/30 transition hover:shadow-xl hover:cursor-pointer hover:shadow-secondary/40 active:scale-95 sm:mt-5">
                    Book Now
                    <span className="ml-2">›</span>
                  </button>
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
