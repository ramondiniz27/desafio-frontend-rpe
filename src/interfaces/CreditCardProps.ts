export interface CreditCardProps {
  nome: string;
  numero: string;
  validade: string;
  bandeira?: string;
  customId?: string;
  className?: string;
  bgClass?: string;
  chipClass?: string;
  key?: string | number;
}
