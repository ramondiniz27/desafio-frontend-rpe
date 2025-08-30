import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// cria o service worker com os handlers definidos
export const worker = setupWorker(...handlers);
