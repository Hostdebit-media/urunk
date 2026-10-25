import React from 'react';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  avifSrcSet?: string;
  webpSrcSet?: string;
  jpgSrcSet?: string;
  imageName?: string;
  width?: number | string;
  height?: number | string;
  isLcp?: boolean;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  showSkeleton?: boolean;
  skeletonClassName?: string;
}

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
  showSkeleton: _showSkeleton,
  skeletonClassName: _skeletonClassName,
  loading,
  fetchPriority,
  srcSet,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
  ...props
}) => {
  const isCritical = isLcp || priority;
  const computedLoading: 'lazy' | 'eager' = loading || (isCritical ? 'eager' : 'lazy');
  const computedFetchPriority: 'high' | 'low' | 'auto' =
    fetchPriority || (isCritical ? 'high' : 'auto');

  const derivedAvif = avifSrcSet || (imageName ? `/images/optimized/${imageName}-400.avif 400w, /images/optimized/${imageName}-800.avif 800w, /images/optimized/${imageName}-1200.avif 1200w` : undefined);
  const derivedWebp = webpSrcSet || (imageName ? `/images/optimized/${imageName}-400.webp 400w, /images/optimized/${imageName}-800.webp 800w, /images/optimized/${imageName}-1200.webp 1200w` : undefined);
  const derivedJpg = jpgSrcSet || (imageName ? `/images/optimized/${imageName}-400.jpg 400w, /images/optimized/${imageName}-800.jpg 800w, /images/optimized/${imageName}-1200.jpg 1200w` : srcSet);
  const fallbackSrc = imageName ? `/images/optimized/${imageName}-800.jpg` : src;

  return (
    <div className={`relative overflow-hidden bg-bg-alt ${className}`}>
      <picture className="w-full h-full block">
        {derivedAvif && (
          <source type="image/avif" srcSet={derivedAvif} sizes={sizes} />
        )}
        {derivedWebp && (
          <source type="image/webp" srcSet={derivedWebp} sizes={sizes} />
        )}
        <img
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          loading={computedLoading}
          fetchPriority={computedFetchPriority}
          decoding={isCritical ? 'sync' : 'async'}
          referrerPolicy="no-referrer"
          srcSet={derivedJpg}
          sizes={sizes}
          className={`w-full h-full object-cover ${imgClassName}`}
          {...props}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
