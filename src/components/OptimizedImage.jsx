import React from 'react';

const OptimizedImage = ({ src, alt, className, width, height, priority = false }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            style={{ contentVisibility: 'auto' }}
        />
    );
};

export default OptimizedImage;
