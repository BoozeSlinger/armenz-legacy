"use client";

import React from 'react';

export const ImageAutoSlider = ({ images, alts = [] }: { images: string[], alts?: string[] }) => {
  // Duplicate images and alts for seamless loop
  const duplicatedImages = [...images, ...images, ...images, ...images];
  const duplicatedAlts = [...alts, ...alts, ...alts, ...alts];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full relative overflow-hidden flex items-center justify-center py-10">
        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="scroll-container w-full overflow-hidden">
            <div className="infinite-scroll flex gap-6 w-max">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl border border-[#C9A84C]/20 flex items-center justify-center bg-zinc-900/50"
                >
                  <img
                    src={image}
                    alt={duplicatedAlts[index] || `Armen Z Legacy Event Image ${index % images.length}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
