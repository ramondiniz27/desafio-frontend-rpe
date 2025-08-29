import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CreditCard } from './index';

const meta: Meta<typeof CreditCard> = {
  title: 'Components/CreditCard',
  component: CreditCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bandeira: {
      control: 'select',
      options: ['visa', 'mastercard', 'Ciello'],
      description: 'A bandeira do cartão de crédito',
    },
    numero: {
      control: 'text',
      description: 'O número do cartão de crédito (sem espaços)',
    },
    nome: {
      control: 'text',
      description: 'O nome do titular do cartão',
    },
    validade: {
      control: 'text',
      description: 'A data de validade no formato MM/AA',
    },
    className: {
      control: 'text',
      description: 'Classes CSS customizadas para o container do cartão',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bandeira: 'visa',
    numero: '1234567890123456',
    nome: 'Joao das coves',
    validade: '12/25',
  },
};

export const Mastercard: Story = {
  args: {
    ...Default.args,
    bandeira: 'mastercard',
    numero: '5555444433332222',
    nome: 'Maria Joaquina',
    validade: '08/26',
  },
};

export const Ciello: Story = {
  args: {
    ...Default.args,
    bandeira: 'Ciello',
    numero: '378282246310005',
    nome: 'Raquel Maria',
    validade: '11/24',
  },
};
