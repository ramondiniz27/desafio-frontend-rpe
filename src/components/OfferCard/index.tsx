import React from 'react';
import { OfferCardProps } from '../../interfaces/OfferCardProps';

export function OfferCard({
  children,
  customId = 'offcard-data-test-id',
  className = '',
  key = '',
}: OfferCardProps) {
  return (
    <div
      data-testid={customId}
      key={key}
      className={`flex flex-col w-[300px] min-w-[375px] min-h-[500px] p-4 border border-gray-50 rounded-md shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function OfferCardContent({
  children,
  customId = 'offercard-content-data-test-id',
  className = '',
}: OfferCardProps) {
  return (
    <div
      data-testid={customId}
      className={`flex w-full flex-col pt-1 border-t border-gray-400 ${className}`}
    >
      {children}
    </div>
  );
}

export function OfferCardFooter({
  children,
  customId = 'offercard-footer-data-test-id',
  className = '',
}: OfferCardProps) {
  return (
    <div
      data-testid={customId}
      className={`flex w-full flex-col py-3 border-t border-gray-400 ${className}`}
    >
      {children}
    </div>
  );
}
