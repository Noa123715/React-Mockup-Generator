// RMGText.tsx
import React from 'react';

interface RMGTextProps {
  content: string;
  variant?: 'body' | 'caption'; // Define text variants, e.g., body text, caption, etc.
}

const RMGText: React.FC<RMGTextProps> = ({ content, variant = 'body' }) => {
  const baseStyle = "text-base";
  const variantStyles = {
    body: "text-gray-700",
    caption: "text-gray-500 text-sm",
  };
  
  return <p className={`${baseStyle} ${variantStyles[variant]}`}>{content}</p>;
};

export default RMGText;
