import axios from 'axios';

export const fileUploadService = async (data: FormData) => {
  const res = await axios.post<FormData, any>(
    'http://localhost:8000/upload',
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return res;
};

export const saveFormData = async (data: any) => {
  const res = await axios.post('http://localhost:8000/saveData', data);
  return res.data;
};

export const getData = async () => {
  const res = await axios.get('http://localhost:8000/getData');
  return res.data;
};
