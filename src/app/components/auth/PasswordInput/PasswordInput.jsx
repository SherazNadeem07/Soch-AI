'use client';
import SvgIcon from '../../globalcomponents/SvgIcon';
import { useState } from 'react';

export default function PasswordInput({
  name = 'password',
  value,
  onChange,
  placeholder = 'Enter your password',
  label = 'Password',
  className = '',
}) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible((prev) => !prev);

  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>

      <div className="relative">
        <input
          type={visible ? 'text' : 'password'}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Toggle eye icon */}
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
        >
          {visible ? (
            <span aria-label="Hide password"><SvgIcon src='togglevisible'/></span> // You can replace with an icon
          ) : (
            <span aria-label="Show password"><SvgIcon src='togglehide'/></span> // You can replace with an icon
          )}
        </button>
      </div>
    </div>
  );
}
