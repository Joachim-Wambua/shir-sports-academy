"use client"
import Image from "next/image";
import { useState } from "react";

const GalleryGrid = ({ items }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow cursor-pointer"
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`Gallery Image ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                muted
                playsInline
                loop
                autoPlay
              />
            )}
          </div>
        ))}
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedMedia(null)}
        >
          {selectedMedia.type === "image" ? (
            <img
              src={selectedMedia.src}
              alt="Preview"
              className="max-w-[90vw] max-h-[90vh]"
            />
          ) : (
            <video
              src={selectedMedia.src}
              className="max-w-[90vw] max-h-[90vh]"
              controls
              autoPlay
            />
          )}
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
