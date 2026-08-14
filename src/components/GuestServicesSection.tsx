import { motion } from "framer-motion";

interface GuestService {
  icon: string;
  title: string;
  description: string;
}

const services: GuestService[] = [
  {
    icon: "🔔",
    title: "24/7 Concierge",
    description: "Our dedicated concierge team is available around the clock to assist with reservations, recommendations, and special requests.",
  },
  {
    icon: "🛏️",
    title: "Housekeeping",
    description: "Daily room cleaning, turndown service, and meticulous attention to detail for your comfort and peace of mind.",
  },
  {
    icon: "🚗",
    title: "Valet Parking",
    description: "Complimentary valet service for seamless arrivals and departures with secure vehicle storage.",
  },
  {
    icon: "📞",
    title: "Room Service",
    description: "Enjoy cuisine from our acclaimed restaurant delivered to your suite at your convenience, any time of day.",
  },
  {
    icon: "🧳",
    title: "Luggage Assistance",
    description: "Our bellhop service handles your baggage with care, offering early check-in and late check-out options.",
  },
  {
    icon: "🌙",
    title: "Turndown Service",
    description: "Evening visits ensure your suite is perfectly prepared for a restful night with personalized touches.",
  },
];

function GuestServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(2,6,23,1),rgba(15,23,42,0.96))] px-4 py-16 text-white sm:px-6 md:px-8 lg:px-12 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_50%)]" />
      <div className="absolute left-0 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent sm:text-sm">
            Guest Services
          </p>
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Thoughtful service,
            <br />
            every step of your stay.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-text-light sm:text-base sm:leading-8">
            From arrival to departure, our attentive staff ensures every detail is handled with care, allowing you to relax and enjoy your retreat.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.06,
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                },
              }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-6 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:bg-white/12 sm:p-7 lg:p-8"
            >
              <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-text-light sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-primary/20 bg-dark/60 px-6 py-6 text-center shadow-lg shadow-primary/10 sm:mt-16 sm:flex sm:items-center sm:justify-between sm:text-left"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Experience Effortless Hospitality
            </p>
            <p className="mt-2 text-sm text-text-light sm:text-base">
              Our team is committed to making your stay seamless and memorable.
            </p>
          </div>
          <button className="mt-4 rounded-full border hover:cursor-pointer border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent/20 sm:mt-0 sm:ml-4 sm:whitespace-nowrap">
            Request a Service
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default GuestServicesSection;
