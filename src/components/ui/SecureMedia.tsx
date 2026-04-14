"use client";

import { useState } from "react";
import Image from "next/image";

interface SecureMediaProps {
  src: string;
  alt?: string;
  type: "image" | "video" | "gif";
  className?: string;
  caption?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * SecureMedia — renders images, videos, and GIFs
 * with right-click protection and download prevention.
 */
export default function SecureMedia({
  src,
  alt = "",
  type,
  className = "",
  caption,
  fill = false,
  width,
  height,
  priority = false,
}: SecureMediaProps) {
  const [loaded, setLoaded] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  if (type === "video") {
    return (
      <figure className={className}>
        <div
          className="relative overflow-hidden rounded-2xl bg-canvas-warm"
          onContextMenu={handleContextMenu}
        >
          <video
            className="interactive w-full h-full object-cover"
            autoPlay={false}
            controls
            playsInline
            controlsList="nodownload nofullscreen"
            disablePictureInPicture
            onContextMenu={handleContextMenu}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
        {caption && (
          <figcaption className="mt-3 text-sm text-ink-faint text-center font-mono">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // image or gif
  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden rounded-2xl bg-canvas-warm ${
          fill ? "w-full h-full" : ""
        }`}
        onContextMenu={handleContextMenu}
        style={!fill && width && height ? { aspectRatio: `${width}/${height}` } : undefined}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            priority={priority}
            draggable={false}
            unoptimized={type === "gif"}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 1200}
            height={height || 675}
            className={`w-full h-auto transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            priority={priority}
            draggable={false}
            unoptimized={type === "gif"}
          />
        )}
        {!loaded && (
          <div className="absolute inset-0 bg-canvas-warm animate-pulse" />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-ink-faint text-center font-mono">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
