import axios from 'axios';
import { API_CONFIG } from "../service/globalService";

// Create Axios instance with baseURL
const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
});

//  Interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('=== Request Interceptor ===');
    console.log('URL:', config.url);
    console.log('Method:', config.method.toUpperCase());
    console.log('Headers:', config.headers);
    console.log('Body:', config.data);
    console.log('==========================');
    return config;
  },
  (error) => {
    console.error('=== Request Interceptor Error ===');
    console.error('Error:', error.message);
    console.error('============================');
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('=== Response Interceptor ===');
    console.log('URL:', response.config.url);
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    console.log('===========================');
    return response;
  },
  (error) => {
    console.error('=== Response Interceptor Error ===');
    console.error('URL:', error.config?.url);
    console.error('Status:', error.response?.status);
    console.error('Error:', error.response?.data || error.message);
    console.error('=============================');
    return Promise.reject(error);
  }
);

const Helper = async ({ endpoint, id, body, token, method, isFile = false }) => {
  const url = `${endpoint}${id ? `/${id}` : ''}`;
  console.log('Helper URL:', url);
  console.log('Helper Method:', method);
  console.log('Helper Body:', body);

  let options = {
    headers: {},
  };

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  if (isFile) {
    const formData = new FormData();
    formData.append('file', body.file);
    body = formData;
    options.headers['Content-Type'] = 'multipart/form-data';
  } else {
    options.headers['Content-Type'] = 'application/json';
  }

  const axiosMethods = {
    GET: () => axiosInstance.get(url, options),
    POST: () => axiosInstance.post(url, body, options),
    PUT: () => axiosInstance.put(url, body, options),
    DELETE: () => axiosInstance.delete(url, options),
  };

  try {
    if (!axiosMethods[method]) {
      throw new Error(`Unsupported HTTP method: ${method}`);
    }

    const res = await axiosMethods[method]();
    const data = res.data;

    return { status: res.status, data };
  } catch (error) {
    console.error('[Helper] Axios Error:', error.response?.data || error.message);
    throw error;
  }
};

export default Helper;
