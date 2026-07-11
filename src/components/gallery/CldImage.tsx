"use client";

import Image from "next/image";
import { cloudinaryLoader, cldSrc } from "@/lib/cloudinary";
import { ComponentProps } from "react";

interface CldImageProps {
  photo: { id: string; v: number; w: number; h: number; alt: string };
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  onLoad?: ComponentProps<typeof Image>["onLoad"];
}

/** next/image bound to the Cloudinary loader (custom loaders must live in a client component). */
export function CldImage({ photo, fill, sizes, className, priority, quality, onLoad }: CldImageProps) {
  if (fill) {
    return (
      <Image
        loader={cloudinaryLoader}
        src={cldSrc(photo)}
        alt={photo.alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        quality={quality}
        onLoad={onLoad}
      />
    );
  }
  return (
    <Image
      loader={cloudinaryLoader}
      src={cldSrc(photo)}
      alt={photo.alt}
      width={photo.w}
      height={photo.h}
      sizes={sizes}
      className={className}
      priority={priority}
      quality={quality}
      onLoad={onLoad}
    />
  );
}
