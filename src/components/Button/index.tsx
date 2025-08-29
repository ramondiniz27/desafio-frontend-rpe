import { ButtonProps } from '../../interfaces/ButtonProps';
import React from 'react';
export function PrimaryButton({
  label,
  className,
  onClick,
  customId = 'primary-button-test-id',
}: ButtonProps) {
  return (
    <button
      className={`w-full flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
      onClick={onClick}
      data-testid={customId}
    >
      {label}
    </button>
  );
}
export function OutlineButton({
  label,
  className,
  onClick,
  customId = 'outline-button-test-id',
}: ButtonProps) {
  return (
    <button
      className={`w-full flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 border-2  hover:border-gray-900 focus:border-gray-400 ${className}`}
      onClick={onClick}
      data-testid={customId}
    >
      {label}
    </button>
  );
}
