import axios from 'axios';
export const SignUp = async (data) => {
  const response = await axios.post(
    'https://auth.famtrust.biz/api/v1/signup',
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
      
    },
  );
  return (response.data);
};
