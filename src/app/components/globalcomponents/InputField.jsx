'use client';

export default function InputField({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  className = '',             // container
  inputClassName = '',        // <input>
  labelClassName = '',        // <label>
  errorClassName = '',        // error <p>
}) {
  return (
    <div className={`w-full mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200 ${labelClassName}`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        className={`
          w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none 
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          text-sm transition-all duration-200
          ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
          ${disabled ? 'bg-gray-100 dark:bg-gray-800 cursor-not-allowed' : 'bg-white dark:bg-gray-900'}
          text-gray-900 dark:text-gray-100
          placeholder-gray-400 dark:placeholder-gray-500
          ${inputClassName}
        `}
      />

      {error && (
        <p className={`mt-1 text-xs text-red-500 dark:text-red-400 ${errorClassName}`}>
          {error}
        </p>
      )}
    </div>
  );
}
