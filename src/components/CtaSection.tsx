import { motion } from "framer-motion";

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(2,6,23,1),rgba(15,23,42,0.96))] px-4 py-16 text-white sm:px-6 md:px-8 lg:px-12 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.45 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl border border-white/10 bg-white/8 p-8 text-center shadow-[0_25px_80px_-25px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-12 lg:p-16"
      >
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent sm:text-sm">
            Reserve Your Escape
          </p>
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Ready to Experience Luxury Like Never Before?
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-8 text-text-light sm:text-base">
            Whether you're planning a relaxing getaway or a business trip, we'll make every moment unforgettable.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="rounded-full bg-linear-to-r from-primary to-primary-light px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-dark transition hover:shadow-lg hover:shadow-primary/25"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CtaSection;
