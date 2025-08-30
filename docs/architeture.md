# 🏗️ Arquitetura do projeto

Este documento explica as decisões arquiteturais tomadas no projeto **Desafio Frontend RPE** e as razões por trás de cada escolha tecnológica.

## 🎯 Visão Geral

A arquitetura foi projetada com foco em **manutenibilidade**, **testabilidade** e **escalabilidade**, seguindo princípios de **Clean Architecture** e **Component-Driven Development**.

### Princípios Fundamentais

- ✅ **Separação de Responsabilidades**
- ✅ **Reutilização de Componentes**
- ✅ **Tipagem Forte**
- ✅ **Testabilidade**
- ✅ **Developer Experience**

## 📁 Estrutura de Pastas

```
src/
├── components/ # Componentes reutilizáveis
│ ├── Button/ # Componente isolado
│ │ ├── index.tsx # Implementação
│ │ ├── index.test.tsx # Testes unitários
│ │ └── index.stories.tsx # Documentação Storybook
│ ├── CreditCard/
│ ├── OfferCard/
│ └── SectionCard/
├── interfaces/ # Contratos TypeScript
├── mocks/ # Mock Service Worker
├── pages/ # Páginas da aplicação
├── services/ # Camada de dados
└── styles/ # Estilos globais
```

### 🎯 Justificativas da Estrutura

#### **1. Componentes isolados**

```typescript
components/
├── Button/
│   ├── index.tsx
│   ├── index.test.tsx
│   └── index.stories.tsx
```

- Isolando as partes realacionadas ao componente podemos centralizar os arquivos de um componente, assim facilitando a manutenção

#### **2. Interfaces centralizadas**

```
interfaces/
├── ButtonProps.ts
├── CreditCardProps.ts
└── CardData.ts
```

- A centralização das interfaces nos permite maior agilidade e facilidade no seu re-uso . alem de facilitar na escalabilidade.

#### **3. Services separados**

```
services/
└── CardService.ts
```

- Separando a logica de negocio dos componentes conseguimos isolar a responsabilidade. seguindo um dos principios de SOLID. assim tambem facilitando a manutenção.
