import axios from 'axios';

export async function getCardData() {
  try {
    const response = await axios.get('/api/cards');
    return response.data;
  } catch (error) {
    console.log('erro ao listar cartoes', error);
  }
}
