# 🚀 stack utilizada no projeto

Este documento explica as decisões das tecnolodias utilizadas no projeto **Desafio Frontend RPE** e as razões por trás de cada escolha tecnológica.

## 🎯 Visão Geral

A stack foi escolhida com foco em **escalabilidade**, **comunidade** e **confiabilidade** seguindo como base as **boas praticas** e **recomendações** de desenvolvimento

### Princípios Fundamentais

- ✅ **Escalabilidade**
- ✅ **Confiabilidade**
- ✅ **Testabilidade**
- ✅ **Clean Code**

## 🔧 Ferramentas utilizadas

#### **Typescript**

```
interface CreditCardProps {
 nome: string;
 numero: string;
 validade: string;
 bandeira?: string;
 customId?: string;
 className?: string;
}
```

- Além de adicionar tipagem forte ao javascript, o typescript tras mais confiabilidade em relação a contratos de apis e até mesmo ao re-utilizar componentes, outra vantagem é a redução de bugs por tipagem.

#### **Tailwind CSS**

```css
className="w-[350px] h-[200px] rounded-2xl bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500"
```

- O uso do Tailwind CSS agiliza o desenvolvimento e traz performace com o uso de css otimizado automaticamente. alem de ser de facil personalização

#### **React Router**

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
</BrowserRouter>
```

- O uso do **React Router** foi para facilitar a navegação entre paginas do react com o uso de **routers** melhorando assim a performace e navegabilidade do projeto

## 🧪 Estratégia de Testes

#### **Jest + Testing Library**

```ts
it('renders the credit card component with correct information', () => {
  render(<CreditCard {...defaultProps} />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});
```

- O uso do **Jest** junto ao **Testing Library** nos dá uma grande gama de possibildades para realizarmos testes logico e testes de tela. Garantiando assim o funcionamento de componentes e testando o comportamento e nao só a implementação.

#### **Testing Library**

```ts
const cards = Array.from({ length: 4 }, () => ({
  id: Math.random().toString(36).substring(2, 10),
  nome: faker.person.firstName() + ' ' + faker.person.lastName(),
}));
```

- Ao utilizar o MSW nos é permitido simular APIS reais, assim nos permitindo implementar o layout de uma projeto mesmo sem a **API** pronta. Além de nos permitir realizar testes de integração sem depender de apis externas

## 📚 Ferramentas de Qualidade

#### **Storybook**

```tsx
export const Default: Story = {
  render: (args) => <CreditCard {...args} />,
  args: {
    nome: 'John Doe',
    numero: '1234567890123456',
    validade: '12/25',
  },
};
```

- O uso do **StoryBook** facilita a documentação de componentes nos trazendo uma forma dinamica de consultar o uso e o comportamento de cada componente nos dando a possibilidade de criarmos um design system de maneira facil e rapida.

#### **ESLint + Prettier**

```ts
export default [
  js.configs.recommended,
  ...compat.config(pluginReact.configs.recommended),
] as const;
```

- O uso do **ESLint + Prettier** nos ajuda a padronizar o codigo nos ajudando com a formatação evitando discrepancias e mantendo o padrao de codigo estabelecido pelo projeto de maneira simples

#### **GitHub Actions CI/CD**

```yaml
- name: Run tests
  run: npm run ci-test
- name: Run linting
  run: npm run lint
```

- O uso de Ci/CD nos permite de maneira rapida realizar testes automatizados no momento de envio do codigo para o repositorio ou de deploy do projeto. Evitando assim quebras no projeto em produção.
