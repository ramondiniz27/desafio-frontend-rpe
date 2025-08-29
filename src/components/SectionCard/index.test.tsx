import React from 'react';
import { render, screen } from '@testing-library/react';
import { SectionCard } from './index';

describe('#SectionCard', () => {
  it('should correctly render children', () => {
    render(<SectionCard>Test Content</SectionCard>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
  it('should had applied default class', () => {
    render(<SectionCard>Test</SectionCard>);
    const card = screen.getByText('Test');
    expect(card).toHaveClass('rounded-md bg-slate-50');
  });

  describe('should be test styles and classes', () => {
    it('should apply custom style class', () => {
      render(<SectionCard className="extra-class">Test</SectionCard>);
      const card = screen.getByText('Test');
      expect(card).toHaveClass('rounded-md bg-slate-50 extra-class');
    });
  });
  it('should apply data-testid on component', () => {
    render(<SectionCard customId="test-id">Test</SectionCard>);
    expect(screen.getByTestId('test-id')).toBeInTheDocument();
  });
});
