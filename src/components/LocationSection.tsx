import { motion } from "framer-motion";

function LocationSection() {
  return (
    <section className="relative overflow-hidden bg-background px-0 py-16 text-white sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="mb-8 text-center md:mb-10"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent sm:text-sm">
            Location
          </p>
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Discover the City in Style
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-text-light sm:text-base sm:leading-8">
            Positioned in the heart of the city, our hotel offers effortless access to culture, cuisine, and unforgettable experiences.
          </p>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-6 w-full max-w-xl overflow-hidden rounded-4xl border border-white/10 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.8)] sm:mt-8 sm:max-w-2xl lg:mt-10 lg:max-w-7xl">
        <div className="relative flex flex-col overflow-hidden lg:flex-row mx-auto">
          <div className="relative h-72 w-full sm:h-90 lg:h-auto lg:w-[58%]">
            <img
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1800&q=80"
              alt="Scenic city destination near the hotel"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark/70 via-dark/20 to-transparent lg:bg-linear-to-r lg:from-dark/70 lg:via-dark/20 lg:to-transparent" />
          </div>

          <div className="flex flex-col justify-center bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.95))] p-5 sm:p-8 lg:w-[42%] lg:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45 }}
              className="mx-auto w-full max-w-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Destination Showcase
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                A destination where city energy meets quiet luxury
              </h3>
              <p className="mt-4 text-sm leading-7 text-text-light sm:text-base">
                Set in a thriving neighborhood of iconic landmarks, refined dining, and cultural hotspots, the hotel places you at the center of the city’s most compelling experiences.
              </p>

              <div className="mt-6 space-y-3 text-sm text-text-light">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                  <span>10 min to the central business district</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                  <span>15 min to the airport by private transfer</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                  <span>Direct access to galleries, restaurants & nightlife</span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/8 p-4 text-sm text-text-light sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Prime Address
                </p>
                <p className="mt-2 font-semibold text-white">No 10 liberation avenue off ukaegbu road ogborhill aba abia state nigeria</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
