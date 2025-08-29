import type { Meta, StoryObj } from '@storybook/react';
import { SectionCard } from './index';
import { OfferCard, OfferCardContent, OfferCardFooter } from '../OfferCard';
import { CreditCard } from '../CreditCard';
import { PrimaryButton } from '../Button';

const meta: Meta<typeof SectionCard> = {
  title: 'Components/SectionCard',
  component: SectionCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'This is a basic SectionCard used as a container.',
    className: 'p-8 min-w-[300px] min-h-[200px]',
  },
};

export const WithOfferCardComplete: Story = {
  render: (args) => (
    <SectionCard {...args}>
      <OfferCard className="flex w-[300px] items-center">
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
    </SectionCard>
  ),
  args: {
    className: 'min-h-[500px] p-3',
  },
};
