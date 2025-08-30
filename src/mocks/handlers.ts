import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

const cards = Array.from({ length: 4 }, () => ({
  id: Math.random().toString(36).substring(2, 10),
  nome: faker.person.firstName() + ' ' + faker.person.lastName(),
  numero: faker.finance.creditCardNumber(),
  validade: faker.date.future().toISOString().slice(0, 7),
  bandeira: 'Visa',
  nomeLoja: faker.company.name(),
  limite: faker.finance
    .amount({ min: 100, max: 20000, dec: 2, autoFormat: true })
    .toString(),
  cobertura: 'Nacional',
}));

export const handlers = [
  http.get('/api/cards', () => {
    return HttpResponse.json(cards);
  }),
];
