import React, { useState, useRef, useEffect } from 'react';

export interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  avifSrcSet?: string;
  webpSrcSet?: string;
  jpgSrcSet?: string;
  imageName?: string;
  className?: string;
  imgClassName?: string;
  skeletonClassName?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  avifSrcSet,
  webpSrcSet,
  jpgSrcSet,
  imageName,
  className = '',
  imgClassName = '',
  skeletonClassName = 'bg-gray-200/80 animate-pulse',
  priority = false,
  loading,
  fetchPriority,
  srcSet,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
  width,
  height,
  ...props
}: ImageWithSkeletonProps) {
  // If priority is true, initialize immediately to loaded so browser paints without waiting for React state cycle
  const [isLoaded, setIsLoaded] = useState(priority ? true : false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If the image is already cached/loaded by the browser when the component mounts or when src changes
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  const imageLoading = loading || (priority ? 'eager' : 'lazy');
  const imageFetchPriority = (fetchPriority as 'high' | 'low' | 'auto') || (priority ? 'high' : 'auto');

  // Auto-generate srcsets if imageName is provided (e.g. "art-house-hero")
  const derivedAvif = avifSrcSet || (imageName ? `/images/optimized/${imageName}-400.avif 400w, /images/optimized/${imageName}-800.avif 800w, /images/optimized/${imageName}-1200.avif 1200w` : undefined);
  const derivedWebp = webpSrcSet || (imageName ? `/images/optimized/${imageName}-400.webp 400w, /images/optimized/${imageName}-800.webp 800w, /images/optimized/${imageName}-1200.webp 1200w` : undefined);
  const derivedJpg = jpgSrcSet || (imageName ? `/images/optimized/${imageName}-400.jpg 400w, /images/optimized/${imageName}-800.jpg 800w, /images/optimized/${imageName}-1200.jpg 1200w` : srcSet);
  const fallbackSrc = imageName ? `/images/optimized/${imageName}-800.jpg` : src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!priority && !isLoaded && (
        <div className={`absolute inset-0 w-full h-full ${skeletonClassName}`} />
      )}
      <picture className="w-full h-full block">
        {derivedAvif && (
          <source type="image/avif" srcSet={derivedAvif} sizes={sizes} />
        )}
        {derivedWebp && (
          <source type="image/webp" srcSet={derivedWebp} sizes={sizes} />
        )}
        <img
          ref={imgRef}
          referrerPolicy="no-referrer"
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          loading={imageLoading}
          fetchPriority={imageFetchPriority}
          decoding={priority ? "sync" : "async"}
          srcSet={derivedJpg}
          sizes={sizes}
          className={`w-full h-full object-cover ${priority ? 'opacity-100' : (isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0')} ${imgClassName}`}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      </picture>
    </div>
  );
}

