// RMGInput.tsx
import React from 'react';

interface RMGInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string; // Optional prop for specifying input type
  autocomplete?: string; // Optional prop for autocomplete attribute
}

const RMGInput: React.FC<RMGInputProps> = ({ placeholder, value, onChange, type = "text", autocomplete }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoComplete={autocomplete} // Set the autocomplete attribute
      className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default RMGInput;
