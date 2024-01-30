// RMGHeader.tsx
import React from 'react';

interface RMGHeaderProps {
  text: string;
}

const RMGHeader: React.FC<RMGHeaderProps> = ({ text }) => {
  return <h1 className="text-2xl font-bold text-center my-4">{text}</h1>;
};

export default RMGHeader;
