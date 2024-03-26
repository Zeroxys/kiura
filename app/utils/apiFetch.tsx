import {useState} from 'react';

const API_URL = 'https://dummyjson.com';

const useApiFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchApi = async (method = 'GET', path = '', body?: {}) => {
    setLoading(true);

    const options = {
      method,
      ...(body && {body: JSON.stringify(body)}),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(`${API_URL}${path}`, options);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError('Error en la solicitud');
      throw new Error(`Error en la solicitud: ${method} ${path}`);
    }
  };

  return {fetchApi, loading, error};
};

export default useApiFetch;
