'use client';

import SvgIcon from '@/components/GlobalComponents/SvgIcon';

export default function Button({
  type = 'button',
  onClick,
  children,
  text,                      
  variant = 'primary',       // 'primary' | 'secondary' | 'outline'
  loading = false,
  disabled = false,
  className = '',
  src,                       
  iconPosition = 'left',     
  iconSize = 18,             
}) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    rounded-md px-4 py-2 text-sm font-medium
    transition-colors focus:outline-none
  `;

  const variants = {
    primary: `
      bg-blue-600 text-white hover:bg-blue-700
      dark:bg-blue-500 dark:hover:bg-blue-600
    `,
    secondary: `
      bg-gray-200 text-gray-800 hover:bg-gray-300 
      dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600
    `,
    outline: `
      border border-gray-400 text-gray-800 hover:bg-gray-100
      dark:border-gray-600 dark:text-white dark:hover:bg-gray-800
    `,
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${disabled || loading ? disabledStyles : ''}
        ${className}
      `}
    >
      {loading ? (
        <span className="animate-pulse">Loading...</span>
      ) : (
        <>
          {src && iconPosition === 'left' && (
            <SvgIcon src={src} size={iconSize} />
          )}
          {children || text}
          {src && iconPosition === 'right' && (
            <SvgIcon src={src} size={iconSize} />
          )}
        </>
      )}
    </button>
  );
}
