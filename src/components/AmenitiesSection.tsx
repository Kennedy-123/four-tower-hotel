import { motion } from "framer-motion";
import { amenities } from "../data/amenities";
import {Link} from "react-router-dom"

function AmenitiesSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_40%),linear-gradient(135deg,rgba(2,6,23,1),rgba(15,23,42,0.96))] px-4 py-16 text-white sm:px-6 md:px-8 lg:px-12 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_40%,rgba(255,255,255,0.02))]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent sm:text-sm">
            Signature Amenities
          </p>
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Every comfort, elevated.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-text-light sm:text-base sm:leading-8">
            Discover the spaces, rituals, and touches that make every stay feel timeless, effortless, and beautifully indulgent.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          {amenities.slice(0, 3).map((row, index) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.75)] backdrop-blur-xl lg:flex-row ${row.reverse ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="relative h-72 overflow-hidden lg:h-auto lg:w-1/2">
                <img
                  src={row.image}
                  alt={row.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/55 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-8 lg:w-1/2 lg:p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                  {row.eyebrow}
                </p>
                <h3 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
                  {row.title}
                </h3>
                <p className="mb-6 text-sm leading-7 text-text-light sm:text-base">
                  {row.description}
                </p>

                <ul className="space-y-3 text-sm text-text-light">
                  {row.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-dark/60 px-6 py-6 text-center shadow-lg shadow-primary/10 sm:flex-row sm:text-left"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              A stay beyond the ordinary
            </p>
            <p className="mt-2 text-sm text-text-light sm:text-base">
              Discover a refined retreat designed for comfort, calm, and memorable moments.
            </p>
          </div>
          <Link
            to="/amenities"
            className="rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent/20"
          >
            Explore All Amenities →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default AmenitiesSection;
