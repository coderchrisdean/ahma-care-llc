import React from 'react';

interface LogoProps {
  colorMode?: 'light' | 'dark';
  size?: string;
}

const Logo: React.FC<LogoProps> = ({ colorMode = 'light', size = 'default' }) => {
  const primaryColor = colorMode === 'light' ? 'text-blue-600' : 'text-white';
  const secondaryColor = colorMode === 'light' ? 'text-gray-800' : 'text-green-400';
  
  const sizeClass = size === 'small' 
    ? 'text-xl' 
    : size === 'large' 
      ? 'text-3xl md:text-4xl' 
      : 'text-2xl';

  return (
    <div className={`font-bold ${sizeClass}`}>
      <span className={primaryColor}>Echo</span>
      <span className={secondaryColor}>Tech</span>
    </div>
  );
};

export default Logo;