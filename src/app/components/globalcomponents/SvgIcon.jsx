'use client';
import { getIconPath } from "@/utils/getIconPath";
export default function SvgIcon({
  src = '',
  size = '1.5rem',
  className = '',
}) {
  const iconPath = getIconPath(src);
  if (!iconPath) return null;

  const resolvedSize =
    typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      role="img"
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMaskImage: `url(${iconPath})`,
        maskImage: `url(${iconPath})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        width: resolvedSize,
        height: resolvedSize,
      }}
    />
  );
}
