import { motion } from "framer-motion";
import { amenities } from "../data/amenities";
import GuestServicesSection from "../components/GuestServicesSection";

export default function AmenitiesPage() {
  return (
    <main>
      {/* Full-bleed hero with text overlay */}
      <section className="relative w-full mb-16">
        <motion.div
          className="absolute inset-0 h-130 md:h-160"
          initial={{ scale: 1 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
          <img
            src={amenities[0].image}
            alt={amenities[0].title}
            className="h-full w-full object-cover"
            loading="lazy"
          />

          {/* primary dark gradient overlay for contrast */}
          <div className="absolute inset-0  bg-black/50 pointer-events-none" />

          {/* subtle color wash overlay to add warmth and polish */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(245,158,11,0.08),rgba(245,158,11,0.02))] mix-blend-multiply" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32 lg:py-40 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="max-w-2xl text-white"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-accent">
              Amenities
            </p>
            <h1 className="mb-6 text-3xl font-semibold sm:text-4xl md:text-5xl">
              Thoughtful spaces & effortless service
            </h1>
            <p className="mb-6 text-base leading-7 text-text-light">
              From restorative rituals to lively gatherings, discover the carefully
              crafted amenities that make every stay feel considered and calm.
            </p>
          </motion.div>
        </div>
      </section>

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
