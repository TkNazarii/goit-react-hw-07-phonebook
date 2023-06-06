import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://647a1d3ea455e257fa645505.mockapi.io/myApi',
  headers: { 'Cache-Control': 'no-cache' },
});

export const getContactApi = async () => {
  try {
    const response = await instance.get('/');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
    throw error;
  }
};

export const addContactApi = async data => {
  try {
    const response = await instance.post('/', data);
    return response.data;
  } catch (error) {
    console.error('Failed to add contact:', error);
    throw error;
  }
};

export const deleteContactApi = async id => {
  try {
    const response = await instance.delete(`/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Failed to remove contact:', error);
    throw error;
  }
};
