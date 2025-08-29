import React from 'react';
import { render, screen } from '@testing-library/react';
import { CreditCard } from './index';

describe('CreditCard', () => {
  const defaultProps = {
    nome: 'John Doe',
    numero: '1234567890123456',
    validade: '12/25',
    bandeira: 'visa',
  };

  it('renders the credit card component with correct information', () => {
    render(<CreditCard {...defaultProps} />);
    expect(screen.getByText('visa')).toBeInTheDocument();
    expect(screen.getByText('1234 5678 9012 3456')).toBeInTheDocument();
    expect(screen.getByText('12/25')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('applies default classes to the main container', () => {
    render(<CreditCard {...defaultProps} />);
    const card = screen.getByTestId('credit-card-data-test-id');
    expect(card).toHaveClass(
      'w-[350px] h-[200px] rounded-2xl bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 text-white p-6 shadow-2xl relative font-sans overflow-hidden'
    );
  });

  it('applies custom classes to the main container', () => {
    render(<CreditCard {...defaultProps} className="custom-class" />);
    const card = screen.getByTestId('credit-card-data-test-id');
    expect(card).toHaveClass('custom-class');
    expect(card).toHaveClass(
      'w-[350px] h-[200px] rounded-2xl bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 text-white p-6 shadow-2xl relative font-sans overflow-hidden'
    );
  });

  it('formats the card number correctly', () => {
    render(<CreditCard {...defaultProps} />);
    expect(screen.getByText('1234 5678 9012 3456')).toBeInTheDocument();
  });

  it('renders different card brands', () => {
    render(<CreditCard {...defaultProps} bandeira="mastercard" />);
    expect(screen.getByText('mastercard')).toBeInTheDocument();
  });

  it('renders the expiration date and label', () => {
    render(<CreditCard {...defaultProps} />);
    const validadeElement = screen.getByText('Validade').nextElementSibling;
    expect(validadeElement).toHaveTextContent('12/25');
  });

  it('renders the card holder name and label', () => {
    render(<CreditCard {...defaultProps} />);
    const titularElement = screen.getByText('Titular').nextElementSibling;
    expect(titularElement).toHaveTextContent('John Doe');
  });

  it('applies custom data-testid', () => {
    render(<CreditCard {...defaultProps} customId="custom-credit-card-id" />);
    expect(screen.getByTestId('custom-credit-card-id')).toBeInTheDocument();
  });

  it('renders the chip', () => {
    render(<CreditCard {...defaultProps} />);
    const chip = screen
      .getByTestId('credit-card-data-test-id')
      .querySelector('.w-12.h-8.bg-yellow-400');
    expect(chip).toBeInTheDocument();
  });

  it('renders the decorative detail', () => {
    render(<CreditCard {...defaultProps} />);
    const detail = screen
      .getByTestId('credit-card-data-test-id')
      .querySelector('.absolute.bottom-0.right-0.w-24.h-24.bg-white\\/10');
    expect(detail).toBeInTheDocument();
  });
});
