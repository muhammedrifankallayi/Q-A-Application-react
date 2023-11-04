import axios from "axios";
const URL = "http://localhost:4500";

const client = axios.create({ baseURL: URL });

export const request = async ({ ...options }) => {
  try {
    const accessToken = localStorage.getItem('artistKey');
    const refreshToken = localStorage.getItem('refreshToken');
    
    if (!accessToken || !refreshToken) {
      throw new Error('Access token or refresh token is missing');
    }

    client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    return await client(options);
  } catch (error) {
    return handleError(error);
  }
};



const handleError = async (error) => {
  if (error.response && error.response.status === 401) {

    try {
   
      const refreshedAccessToken = await refreshAccessToken();

   
      const originalRequest = error.config;
      originalRequest.headers.Authorization = `Bearer ${refreshedAccessToken}`;

      return await client(originalRequest);
    } catch (refreshError) {
      // Handle errors while refreshing the token
      return Promise.reject(refreshError);
    }
  } else {
    // Handle other errors
    return Promise.reject(error);
  }
};

const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
      // Handle case where refresh token is missing
      throw new Error('Refresh token is missing');
    }

    // Make a request to your server to refresh the access token
    const response = await client.post('/refresh-token-endpoint', {
      refreshToken,
    });

    // Store the new access token
    const newAccessToken = response.data.accessToken;
    localStorage.setItem('artistKey', newAccessToken);

    return newAccessToken;
  } catch (error) {
    // Handle errors while refreshing the token
    return Promise.reject(error);
  }
};

// Other request functions (e.g., user and admin) can be similarly modified


const admin = axios.create({ baseURL:URL })
export const adminRequest = ({ ...options }) => {
    admin.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('adminKey')}`
    const onSuccess = (response) => response
    const onError = (error) => {
        return error
    }

    return admin(options).then(onSuccess).catch(onError)
}   