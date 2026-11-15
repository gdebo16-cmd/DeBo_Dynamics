import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function OptimizedImage({ src, alt, width, height, ...props }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy" // Only loads when entering the viewport
      decoding="async" // Prevents image decoding from blocking the main thread
      width={width}
      height={height}
      className="max-w-full h-auto rounded-lg shadow-sm"
      {...props}
    />
  );
}