import React from 'react';
export interface ModalProps {
  ishowModal: boolean;
  onCloseModal: () => void;
  onClick: () => void;
  children: React.ReactNode;
  title: string;
  className?: string;
  customId?: string;
}
