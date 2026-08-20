import { motion } from "framer-motion";
import { useState } from "react";
import { defaultRooms, type Room } from "../data/featuredRooms";
import { Link } from "react-router-dom";

interface FeaturedRoomsProps {
  title?: string;
  subtitle?: string;
  rooms?: Room[];
}

function FeaturedRooms({
  title = "Our Featured Rooms",
  subtitle = "Carefully curated accommodations designed for discerning guests",
  rooms = defaultRooms,
}: FeaturedRoomsProps) {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const displayedRooms = rooms.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="bg-background px-4 py-16 text-white sm:px-6 md:px-8 lg:px-12 lg:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="mb-12 text-center md:mb-16"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm sm:tracking-[0.4em]">
          Premium Accommodations
        </p>
        <h2 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-6 text-text-light sm:text-base sm:leading-7 lg:text-lg">
          {subtitle}
        </p>
      </motion.div>

      {/* Rooms Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-4"
      >
        {displayedRooms.map((room) => (
          <motion.div
            key={room.id}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                },
              },
            }}
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              setSelectedRoom(selectedRoom === room.id ? null : room.id)
            }
          >
            {/* Card Container */}
            <div className="overflow-hidden rounded-lg border border-border bg-surface/50 transition-all duration-200 hover:border-accent/30">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-section sm:h-56 md:h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                {/* Category Badge */}
                <div className="absolute right-3 top-3 rounded-full border border-accent/50 bg-dark/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {room.category}
                </div>

                {/* Capacity Info */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-dark/80 px-3 py-1 text-xs text-text-light">
                  <span>👥</span>
                  <span>{room.capacity} guests</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="flex-1 text-lg font-semibold leading-tight sm:text-xl">
                    {room.name}
                  </h3>
                  <div className="whitespace-nowrap text-right">
                    <p className="text-xs text-text-muted">per night</p>
                    <p className="text-xl font-bold text-accent sm:text-2xl">
                      ${room.price}
                    </p>
                  </div>
                </div>

                <p className="mb-4 line-clamp-2 text-xs leading-6 text-text-light sm:text-sm">
                  {room.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-12 text-center md:mt-16"
      >
        <p className="mb-4 text-sm text-text-muted sm:text-base">
          Looking for something special? Explore all our room types and
          amenities.
        </p>
        <Link
          to="/rooms"
          className="rounded-lg bg-linear-to-r from-primary to-primary-light px-6 py-3 font-semibold uppercase tracking-wider text-dark shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/40 active:scale-95 sm:px-8 sm:py-3.5 sm:text-base hover:cursor-pointer"
        >
          Browse All Rooms
        </Link>
      </motion.div>
    </section>
  );
}

export default FeaturedRooms;
