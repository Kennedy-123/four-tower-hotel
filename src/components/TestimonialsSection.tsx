import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

function TestimonialsSection() {
  const averageScore = (
    testimonials.reduce((sum, item) => sum + item.score, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(2,6,23,1),rgba(15,23,42,0.96))] px-4 py-16 text-white sm:px-6 md:px-8 lg:px-12 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_40%)]" />
      <div className="absolute right-0 top-1/2 h-105 w-105 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent sm:text-sm">
            Guest Reviews
          </p>
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            A refined stay, celebrated by guests.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-text-light sm:text-base sm:leading-8">
            Discover why guests rave about the atmosphere, thoughtful service, and unforgettable luxury moments.
          </p>
        </motion.div>

        <div className="mb-10 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_30px_90px_-50px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Trusted by travelers
            </p>
            <h3 className="mt-4 text-4xl font-semibold sm:text-5xl">{averageScore}/5</h3>
            <p className="mt-2 max-w-xl text-sm leading-7 text-text-light sm:text-base">
              Based on {testimonials.length} guest reviews across our luxury rooms and signature suites.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-background/70 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-text-muted">Best for</p>
              <p className="mt-3 text-lg font-semibold">Service & Hospitality</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-background/70 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-text-muted">Top highlight</p>
              <p className="mt-3 text-lg font-semibold">Quiet luxury experience</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={`${item.author}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/8 p-6 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 rounded-full bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.35em] text-accent">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex} className={starIndex < Math.round(item.score) ? "text-accent" : "text-white/40"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-text-light">
                  {item.location}
                </span>
              </div>

              <blockquote className="mt-6 text-base leading-8 text-text-light sm:text-lg">
                “{item.quote}”
              </blockquote>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                <div>
                  <p className="font-semibold text-white">{item.author}</p>
                  <p className="text-sm text-text-muted">Verified guest</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
