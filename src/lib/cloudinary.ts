import type { ImageLoaderProps } from "next/image";

const CLOUD_NAME = "dqj3xyvey";
const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

interface CldAsset {
  id: string;
  v: number;
}

/** src value for next/image when paired with cloudinaryLoader. */
export function cldSrc(asset: CldAsset): string {
  return `v${asset.v}/${asset.id}`;
}

/** Direct delivery URL at a given width — f_auto serves WebP/AVIF, q_auto compresses. */
export function cldUrl(asset: CldAsset, width: number): string {
  return `${BASE}/f_auto,q_auto,c_limit,w_${width}/v${asset.v}/${asset.id}`;
}

/**
 * Custom next/image loader — images serve straight from Cloudinary's CDN,
 * bypassing the Vercel image optimizer (no quota usage, no remotePatterns needed).
 */
export function cloudinaryLoader({ src, width, quality }: ImageLoaderProps): string {
  const q = quality ? `q_${quality}` : "q_auto";
  return `${BASE}/f_auto,${q},c_limit,w_${width}/${src}`;
}
