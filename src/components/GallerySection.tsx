import { motion } from "framer-motion";
import { galleryImages } from "../data/galleryImages";
import {Link} from "react-router-dom"

function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-16 text-white sm:px-6 md:px-8 lg:px-12 lg:py-24">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent sm:text-sm">
            Gallery
          </p>
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Discover Our Beautiful Spaces
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-text-light sm:text-base sm:leading-8">
            A glimpse into the atmosphere, design, and comfort that define every corner of our hotel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-4xl border border-white/10 bg-white/8 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.75)] backdrop-blur-xl p-4 sm:p-6 lg:p-8"
        >
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Featured Collection
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                The art of timeless luxury
              </h3>
            </div>
            <Link
              to="./gallery"
              className="text-sm font-semibold text-accent transition hover:text-primary-light"
            >
              Explore Full Gallery →
            </Link>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
            {galleryImages.map((image) => (
              <div
                key={image.alt}
                className="group relative min-w-70 flex-1 overflow-hidden rounded-[1.2rem] border border-white/10 sm:min-w-80 lg:min-w-90"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-96"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GallerySection;
