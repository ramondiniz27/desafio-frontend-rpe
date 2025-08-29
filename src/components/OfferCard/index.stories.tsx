import type { Meta, StoryObj } from '@storybook/react';
import { OfferCard, OfferCardContent, OfferCardFooter } from './index';
import { CreditCard } from '../CreditCard';
import { PrimaryButton } from '../Button';

const meta: Meta<typeof OfferCard> = {
  title: 'Components/OfferCard',
  component: OfferCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <OfferCard {...args}>
      <OfferCardContent>
        <h2>Título da Oferta</h2>
        <p>Esta é a descrição básica do card de oferta.</p>
      </OfferCardContent>
      <OfferCardFooter>
        <p>Conteúdo do rodapé.</p>
      </OfferCardFooter>
    </OfferCard>
  ),
  args: {
    className: 'flex w-[300px] items-center',
  },
};

export const Default: Story = {
  render: (args) => (
    <OfferCard {...args}>
      <CreditCard
        nome="Joao das Coves"
        numero="123456789123"
        validade="10/2050"
      />
      <OfferCardContent className="mt-3">
        <div className="flex flex-start flex-col gap-1">
          <div className="w-full flex flex-row justify-between mt-3">
            <div className="font-semibold text-sm">Nome da Loja:</div>
            <div className="text-[14px]">Loja Venda Certa</div>
          </div>
          <div className="w-full flex flex-row justify-between mt-3">
            <div className="font-semibold text-sm">Limite Máximo:</div>
            <div className="text-[14px]">R$2.000,00</div>
          </div>
          <div className="w-full flex flex-row justify-between mt-3">
            <div className="font-semibold text-sm">Cobertura:</div>
            <div className="text-[14px]">Nacional</div>
          </div>
        </div>
      </OfferCardContent>
      <OfferCardFooter className="w-full flex mt-24">
        <PrimaryButton
          label="Solicite o seu!!"
          // eslint-disable-next-line no-undef
          onClick={() => alert('Botão clicado!')}
        />
      </OfferCardFooter>
    </OfferCard>
  ),
  args: {
    className: 'flex w-[300px] items-center',
  },
};
