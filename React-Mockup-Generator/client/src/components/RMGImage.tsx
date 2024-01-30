// RMGImage.tsx
import React from 'react';

interface RMGImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const RMGImage: React.FC<RMGImageProps> = ({ src, alt, width = 'auto', height = 'auto' }) => {
  return <img src={src} alt={alt} style={{ width, height }} className="rounded" />;
};

export default RMGImage;
