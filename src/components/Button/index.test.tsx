import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PrimaryButton, OutlineButton } from './index';

describe('Button Components', () => {
  describe('PrimaryButton', () => {
    it('renders with correct label', () => {
      render(<PrimaryButton label="Click me" />);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('applies default classes', () => {
      render(<PrimaryButton label="Click me" />);
      const button = screen.getByTestId('primary-button-test-id');
      expect(button).toHaveClass(
        'w-full flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      );
    });

    it('applies custom classes', () => {
      render(<PrimaryButton label="Click me" className="custom-class" />);
      const button = screen.getByTestId('primary-button-test-id');
      expect(button).toHaveClass('custom-class');
    });

    it('calls onClick handler when clicked', () => {
      const handleClick = jest.fn();
      render(<PrimaryButton label="Click me" onClick={handleClick} />);
      fireEvent.click(screen.getByText('Click me'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies custom data-testid', () => {
      render(<PrimaryButton label="Click me" customId="custom-button-id" />);
      expect(screen.getByTestId('custom-button-id')).toBeInTheDocument();
    });
  });

  describe('OutlineButton', () => {
    it('renders with correct label', () => {
      render(<OutlineButton label="Click me" />);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('applies default classes', () => {
      render(<OutlineButton label="Click me" />);
      const button = screen.getByTestId('outline-button-test-id');
      expect(button).toHaveClass(
        'w-full flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 border-2 hover:border-gray-900 focus:border-gray-400'
      );
    });

    it('applies custom classes', () => {
      render(<OutlineButton label="Click me" className="custom-class" />);
      const button = screen.getByTestId('outline-button-test-id');
      expect(button).toHaveClass('custom-class');
    });

    it('calls onClick handler when clicked', () => {
      const handleClick = jest.fn();
      render(<OutlineButton label="Click me" onClick={handleClick} />);
      fireEvent.click(screen.getByText('Click me'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies custom data-testid', () => {
      render(<OutlineButton label="Click me" customId="custom-button-id" />);
      expect(screen.getByTestId('custom-button-id')).toBeInTheDocument();
    });
  });
});
