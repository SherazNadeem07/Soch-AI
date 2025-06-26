'use client';
import React from 'react';
import { getIconPath } from '@/utils/getIconPath';

export default function SvgIcon({
  src = '',
  size = '1.5rem',
  className = '',
  color,
  alt = '',
  style = {},
}) {

  const iconPath = getIconPath(src);
  if (!iconPath) return null;


  const resolvedSize =
    typeof size === 'number'
      ? `${size}px`
      : typeof size === 'string' && size.trim() !== ''
      ? size
      : '1.5rem'; 

  const combinedStyle = {
    width: resolvedSize,
    height: resolvedSize,

    ...(color ? { color } : {}),
    ...style,
  };

  return (
    <img
      src={iconPath}
      alt={alt}
      role="img"
      aria-hidden={alt ? 'false' : 'true'}
      className={className}
      style={combinedStyle}
      draggable={false}
      decoding="async"
      loading="lazy"
    />
  );
}
       