import React from 'react';
import { render, screen } from '@testing-library/react';
import { OfferCard, OfferCardContent, OfferCardFooter } from './index';

describe('#OfferCard', () => {
  it('should render children correctly', () => {
    render(<OfferCard>Test Offer</OfferCard>);
    expect(screen.getByText('Test Offer')).toBeInTheDocument();
  });

  it('should apply custom data-testid', () => {
    render(<OfferCard customId="custom-test-id">Test Offer</OfferCard>);
    expect(screen.getByTestId('custom-test-id')).toBeInTheDocument();
  });

  it('should render complex children', () => {
    render(
      <OfferCard>
        <OfferCardContent>
          <h2>Offer Title</h2>
          <p>Offer Description</p>
        </OfferCardContent>
        <OfferCardFooter>
          <p>Footer Content</p>
        </OfferCardFooter>
      </OfferCard>
    );
    expect(screen.getByText('Offer Title')).toBeInTheDocument();
    expect(screen.getByText('Offer Description')).toBeInTheDocument();
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });
});

describe('#OfferCardContent', () => {
  it('should render children correctly', () => {
    render(<OfferCardContent>Content Test</OfferCardContent>);
    expect(screen.getByText('Content Test')).toBeInTheDocument();
  });

  it('should apply default classes', () => {
    render(<OfferCardContent>Content Test</OfferCardContent>);
    const content = screen.getByTestId('offercard-content-data-test-id');
    expect(content).toHaveClass(
      'flex',
      'w-full',
      'flex-col',
      'pt-1',
      'border-t',
      'border-gray-400'
    );
  });

  it('should apply custom classes', () => {
    render(
      <OfferCardContent className="custom-class">Content Test</OfferCardContent>
    );
    const content = screen.getByTestId('offercard-content-data-test-id');
    expect(content).toHaveClass('custom-class');
    expect(content).toHaveClass(
      'flex',
      'w-full',
      'flex-col',
      'pt-1',
      'border-t',
      'border-gray-400'
    );
  });

  it('should apply custom data-testid', () => {
    render(
      <OfferCardContent customId="custom-content-id">
        Content Test
      </OfferCardContent>
    );
    expect(screen.getByTestId('custom-content-id')).toBeInTheDocument();
  });
});

describe('#OfferCardFooter', () => {
  it('should render children correctly', () => {
    render(<OfferCardFooter>Footer Test</OfferCardFooter>);
    expect(screen.getByText('Footer Test')).toBeInTheDocument();
  });

  it('should apply default classes', () => {
    render(<OfferCardFooter>Footer Test</OfferCardFooter>);
    const footer = screen.getByTestId('offercard-footer-data-test-id');
    expect(footer).toHaveClass(
      'flex',
      'w-full',
      'flex-col',
      'py-3',
      'border-t',
      'border-gray-400'
    );
  });

  it('should apply custom data-testid', () => {
    render(
      <OfferCardFooter customId="custom-footer-id">Footer Test</OfferCardFooter>
    );
    expect(screen.getByTestId('custom-footer-id')).toBeInTheDocument();
  });

  it('should apply custom classes', () => {
    render(
      <OfferCardFooter className="custom-class">Footer Test</OfferCardFooter>
    );
    const footer = screen.getByTestId('offercard-footer-data-test-id');
    expect(footer).toHaveClass('custom-class');
    expect(footer).toHaveClass(
      'flex',
      'w-full',
      'flex-col',
      'py-3',
      'border-t',
      'border-gray-400'
    );
  });
});
