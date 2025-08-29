import React from 'react';
import { CreditCardProps } from '../../interfaces/CreditCardProps';

export function CreditCard({
  nome,
  numero,
  validade,
  bandeira = 'visa',
  customId = 'credit-card-data-test-id',
  className = '',
  bgClass = 'bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500',
  chipClass = 'border-yellow-200 bg-yellow-400',
  key,
}: CreditCardProps) {
  return (
    <div
      data-testid={customId}
      key={key}
      className={`w-[350px] h-[200px] rounded-2xl text-white p-6 shadow-2xl relative font-sans overflow-hidden ${bgClass} ${className}`}
    >
      {/* Bandeira */}
      <div className="absolute top-4 right-4 text-sm uppercase tracking-wide opacity-80">
        {bandeira}
      </div>

      {/* Chip estilizado */}
      <div
        className={`w-12 h-8 ${chipClass} rounded-md mb-6 shadow-inner border`}
      ></div>

      <div className="text-xl tracking-widest font-mono mb-4">
        {numero.replace(/(\d{4})/g, '$1 ').trim()}
      </div>

      <div className="flex justify-between items-center text-sm mt-4">
        <div>
          <div className="uppercase text-xs opacity-70">Validade</div>
          <div className="font-semibold">{validade}</div>
        </div>
        <div>
          <div className="uppercase text-xs opacity-70">Titular</div>
          <div className="font-semibold">{nome}</div>
        </div>
      </div>

      {/* Detalhe decorativo */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
    </div>
  );
}
