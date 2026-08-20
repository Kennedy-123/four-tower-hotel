import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import HeroSection from "../components/HeroSection";
import { defaultRooms, type Room } from "../data/featuredRooms";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";

function RoomCard({ room }: { room: Room }) {
  const message = `Hi, I'd like to make a booking inquiry for the ${room.name} at $${room.price} per night. 

    Number of guests (up to ${room.capacity}):
    Check-in date: [Please specify]
    Check-out date: [Please specify]

Could you please confirm availability and the total cost for my stay?

  Thank you!`;
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-surface/70 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.7)] transition-all duration-300"
    >
      <div className="relative h-72 overflow-hidden bg-dark/20">
        <img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              {room.name}
            </h3>
            <p className="mt-1 text-sm uppercase tracking-[0.25em] text-accent">
              {room.category}
            </p>
            <p className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-text-light">
              {room.capacity} guest{room.capacity === 1 ? "" : "s"}
            </p>
          </div>
          <div className="text-right pb-12">
            <p className="text-2xl font-bold text-accent sm:text-3xl">
              ${room.price}
            </p>
            <p className="text-xs text-text-muted">per night</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1 text-sm text-accent">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-7 text-text-light">
          {room.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-xs text-text-light">
          {room.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`https://wa.me/2347086661378?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm rounded-full bg-accent px-5 hover:cursor-pointer py-3 font-bold text-dark transition hover:bg-primary-light"
          >
            Book Now
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function RoomPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [capacityFilter, setCapacityFilter] = useState("All");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(defaultRooms.map((room) => room.category))),
    ],
    [],
  );

  const capacities = useMemo(
    () => [
      "All",
      ...Array.from(new Set(defaultRooms.map((room) => room.capacity))).sort(
        (a, b) => Number(a) - Number(b),
      ),
    ],
    [],
  );

  const filteredRooms = useMemo(
    () =>
      defaultRooms.filter((room) => {
        const query = search.trim().toLowerCase();
        const matchesSearch =
          room.name.toLowerCase().includes(query) ||
          room.category.toLowerCase().includes(query) ||
          room.amenities.some((amenity) =>
            amenity.toLowerCase().includes(query),
          );

        const matchesCategory =
          categoryFilter === "All" || room.category === categoryFilter;
        const matchesCapacity =
          capacityFilter === "All" || room.capacity >= Number(capacityFilter);

        return matchesSearch && matchesCategory && matchesCapacity;
      }),
    [search, categoryFilter, capacityFilter],
  );

  return (
    <>
      <HeroSection
        eyebrow="Rooms & Suites"
        title="Restful stays, effortless luxury"
        description="Explore our curated rooms and suites designed for comfort, privacy, and memorable moments."
        primaryCta="Book a Suite"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80"
        showBookingWidget={false}
        showPrimaryCta={false}
      />

      {/* Rooms & Suites Section */}
      <section className="bg-background mt-8 md:mt-24 px-4 py-24 text-white sm:px-6 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent sm:text-sm">
            Our Rooms & Suites
          </p>
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Our Rooms & Suites
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-text-light sm:text-base sm:leading-8">
            Discover a collection of luxurious rooms and suites, each designed
            to deliver comfort, style, and unforgettable moments.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/10 bg-surface/60 p-4 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)] sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[2.2fr_1fr_1fr] xl:grid-cols-[2.5fr_1fr_1fr] items-end">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="room-search"
                className="text-xs font-semibold uppercase tracking-[0.35em] text-text-muted"
              >
                Search
              </label>
              <input
                id="room-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by name, category, or amenity"
                className="h-14 w-full rounded-full border border-white/10 bg-background/80 px-5 text-white placeholder:text-text-muted outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="category-filter"
                className="text-xs font-semibold uppercase tracking-[0.35em] text-text-muted"
              >
                Category
              </label>
              <select
                id="category-filter"
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
                className="h-14 rounded-full border border-white/10 bg-background/80 px-5 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="capacity-filter"
                className="text-xs font-semibold uppercase tracking-[0.35em] text-text-muted"
              >
                Capacity
              </label>
              <select
                id="capacity-filter"
                value={capacityFilter}
                onChange={(event) => setCapacityFilter(event.target.value)}
                className="h-14 rounded-full border border-white/10 bg-background/80 px-5 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              >
                {capacities.map((capacity) => (
                  <option key={capacity} value={capacity}>
                    {capacity === "All" ? "All" : `${capacity}+ guests`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-text-muted">
              {filteredRooms.length} room{filteredRooms.length === 1 ? "" : "s"}{" "}
              found.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategoryFilter("All");
                setCapacityFilter("All");
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:bg-white/10"
            >
              Reset filters
            </button>
          </div>
        </div>

        {filteredRooms.length === 0 ? (
          <div className="mx-auto mt-16 flex max-w-xl flex-col items-center rounded-3xl border border-white/10 bg-surface/60 px-8 py-12 text-center shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)]">
            <p className="text-2xl font-semibold text-white">
              No rooms match your search
            </p>
            <p className="mt-3 text-sm leading-7 text-text-light">
              Try adjusting your filters or browse all of our luxury stays.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategoryFilter("All");
                setCapacityFilter("All");
              }}
              className="mt-6 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-dark transition hover:bg-primary-light"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </section>
      <div className="mt-24">
        <TestimonialsSection />
      </div>
      <CtaSection />
    </>
  );
}

export default RoomPage;
