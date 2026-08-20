import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/HeroSection";
import { galleryImages } from "../data/galleryImages";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[number] | null
  >(null);

  return (
    <main>
      <HeroSection
        eyebrow="Gallery"
        title="A Glimpse of Your Stay"
        description="Explore the spaces, experiences, and details that make every stay with us unforgettable."
        primaryCta="Book Your Stay"
        backgroundImage={galleryImages[0].src}
        showBookingWidget={false}
        showPrimaryCta={false}
      />

      <section className="bg-background px-4 py-24 text-white sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent sm:text-sm">
              Curated Collection
            </p>
            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
              Inside Four Tower Hotel
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-text-light sm:text-base sm:leading-8">
              Explore the textures, details, and atmosphere that make every stay feel cinematic and deeply restorative.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((image, index) => (
              <motion.figure
                key={image.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`group overflow-hidden rounded-[1.6rem] border border-white/10 bg-surface/70 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)] ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-105 ${
                      index === 0 ? "h-[420px] md:h-[520px]" : "h-80 sm:h-96"
                    }`}
                    loading="lazy"
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-4 p-5 text-left">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                      {image.title}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-light transition hover:border-accent hover:text-accent"
                  >
                    View
                  </button>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.97, opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-surface/90 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.8)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close image view"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-white transition hover:bg-black/60"
              >
                ✕
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[85vh] w-full object-cover"
              />

              <div className="border-t border-white/10 bg-surface/90 px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                  {selectedImage.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
