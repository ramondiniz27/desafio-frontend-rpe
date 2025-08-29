import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from '@storybook/test';
import { PrimaryButton, OutlineButton } from './index';

// Meta-configuração para agrupar os botões
const meta: Meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  // Define args comuns e actions para todos os botões
  args: {
    onClick: fn(),
    label: 'Button',
  },
};

export default meta;

//#PrimaryButton
export const Primary: StoryObj<typeof PrimaryButton> = {
  render: (args) => <PrimaryButton {...args} />,
  args: {
    label: 'Primary Button',
  },
};

//#OutlineButton
export const Outline: StoryObj<typeof OutlineButton> = {
  render: (args) => <OutlineButton {...args} />,
  args: {
    label: 'Outline Button',
  },
};
