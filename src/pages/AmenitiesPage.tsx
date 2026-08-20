import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import { amenities } from "../data/amenities";
import GuestServicesSection from "../components/GuestServicesSection";

export default function AmenitiesPage() {
  return (
    <main>
      <HeroSection
        eyebrow="Amenities"
        title="Thoughtful spaces & effortless service"
        description="From restorative rituals to lively gatherings, discover the carefully crafted amenities that make every stay feel considered and calm."
        primaryCta="Explore Rooms"
        backgroundImage={amenities[0].image}
        showBookingWidget={false}
        showPrimaryCta={false}
      />

      {/* Amenities overview (show 3) */}
      <section id="overview" className="bg-dark/60 mt-6 md:mt-12 px-4 py-24 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent mt-5">
              Signature Amenities
            </p>
            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
              Every comfort, elevated.
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-text-light sm:text-base sm:leading-8">
              A curated selection of our most-loved spaces, presented with
              clarity and purpose.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {amenities.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/6 p-6 shadow-lg"
              >
                <div className="mb-4 h-44 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                  {item.eyebrow}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-text-light">
                  {item.description}
                </p>
                <ul className="space-y-2 text-sm text-text-light">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Services Section */}
      <GuestServicesSection />
    </main>
  );
}
