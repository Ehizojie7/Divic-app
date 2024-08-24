import apiClient from './axios';

const login = async (username: string, password: string) => {
  try {
    const response = await apiClient.post('/login', {
      usr: username,
      pwd: password,
    });
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export default login;