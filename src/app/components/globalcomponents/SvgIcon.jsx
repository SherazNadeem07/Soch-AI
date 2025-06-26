'use client';
import {getIconPath} from '@/utils/getIconPath';

export default function SvgIcon({ src, size='', className = '' }) {
  const iconPath = getIconPath(src); 

  return (
    <div
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMaskImage: `url(${iconPath})`,
        maskImage: `url(${iconPath})`, 
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        width: size,
        height: size,
      }}
    />
  );
}
