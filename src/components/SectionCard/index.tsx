import React from 'react';
import { SectionCardProps } from '../../interfaces/SectionCardProps';
export function SectionCard({
  className,
  customId = 'section-card-id',
  children,
}: SectionCardProps) {
  return (
    <div
      className={`w-full flex flex-col rounded-md border border-gray-400 bg-slate-50 shadow-lg ${className}`}
      data-testid={customId}
    >
      {children}
    </div>
  );
}
