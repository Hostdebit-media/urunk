import React, { useState, useRef, useEffect } from 'react';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  avifSrcSet?: string;
  webpSrcSet?: string;
  jpgSrcSet?: string;
  imageName?: string; // Optional helper: e.g. "art-house-hero", auto-generates responsive sets
  width?: number | string;
  height?: number | string;
  isLcp?: boolean;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  showSkeleton?: boolean;
  skeletonClassName?: string;
}

/**
 * OptimizedImage
 * A performance-focused image component that:
 * 1. Emits <picture> with AVIF, WebP, and JPG fallbacks
 * 2. Provides responsive srcsets (1200w, 800w, 400w)
 * 3. Requires width & height attributes to eliminate Cumulative Layout Shift (CLS)
 * 4. Defaults non-critical images to loading="lazy" for offscreen deferral
 * 5. Applies fetchPriority="high" and loading="eager" for LCP images
 * 6. Sets decoding="async" and referrerPolicy="no-referrer"
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  avifSrcSet,
  webpSrcSet,
  jpgSrcSet,
  imageName,
  width,
  height,
  isLcp = false,
  priority = false,
  className = '',
  imgClassName = '',
  showSkeleton = true,
  skeletonClassName = 'bg-gray-200/80 animate-pulse',
  loading,
  fetchPriority,
  srcSet,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
  onLoad,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const isCritical = isLcp || priority;

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  // Determine loading strategy: 'eager' for LCP, 'lazy' for non-critical
  const computedLoading: 'lazy' | 'eager' = loading || (isCritical ? 'eager' : 'lazy');

  // Determine fetch priority: 'high' for LCP images
  const computedFetchPriority: 'high' | 'low' | 'auto' =
    fetchPriority || (isCritical ? 'high' : 'auto');

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  // Auto-generate srcsets if imageName is provided (e.g. "art-house-hero")
  const derivedAvif = avifSrcSet || (imageName ? `/images/optimized/${imageName}-400.avif 400w, /images/optimized/${imageName}-800.avif 800w, /images/optimized/${imageName}-1200.avif 1200w` : undefined);
  const derivedWebp = webpSrcSet || (imageName ? `/images/optimized/${imageName}-400.webp 400w, /images/optimized/${imageName}-800.webp 800w, /images/optimized/${imageName}-1200.webp 1200w` : undefined);
  const derivedJpg = jpgSrcSet || (imageName ? `/images/optimized/${imageName}-400.jpg 400w, /images/optimized/${imageName}-800.jpg 800w, /images/optimized/${imageName}-1200.jpg 1200w` : srcSet);
  const fallbackSrc = imageName ? `/images/optimized/${imageName}-800.jpg` : src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showSkeleton && !isLoaded && (
        <div
          className={`absolute inset-0 w-full h-full ${skeletonClassName}`}
          aria-hidden="true"
        />
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
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          loading={computedLoading}
          fetchPriority={computedFetchPriority}
          decoding="async"
          referrerPolicy="no-referrer"
          srcSet={derivedJpg}
          sizes={sizes}
          onLoad={handleLoad}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
          {...props}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
