import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './index';

describe('HomePage', () => {
  it('renders the SectionCard component', () => {
    render(<HomePage />);
    const sectionCard = screen.getByTestId('section-card-test-id');
    expect(sectionCard).toBeInTheDocument();
  });

  it('renders the OfferCard component inside SectionCard', () => {
    render(<HomePage />);
    const offerCard = screen.getByTestId('offcard-data-test-id');
    expect(offerCard).toBeInTheDocument();
  });

  it('renders the CreditCard component inside OfferCard', () => {
    render(<HomePage />);
    const creditCard = screen.getByTestId('credit-card-data-test-id');
    expect(creditCard).toBeInTheDocument();
  });

  it('renders correct credit card information', () => {
    render(<HomePage />);
    expect(screen.getByText('Joao das Coves')).toBeInTheDocument();
    expect(screen.getByText('1234 5678 9123')).toBeInTheDocument();
    expect(screen.getByText('10/2050')).toBeInTheDocument();
  });

  it('applies correct classes to the main container', () => {
    render(<HomePage />);
    const mainContainer = screen.getByTestId(
      'section-card-test-id'
    ).parentElement;
    expect(mainContainer).toHaveClass(
      'w-full flex flex-col p-8 h-screen justify-center items-center'
    );
  });

  it('applies min-height class to SectionCard', () => {
    render(<HomePage />);
    const sectionCard = screen.getByTestId('section-card-test-id');
    expect(sectionCard).toHaveClass('min-h-[500px]');
  });
});
