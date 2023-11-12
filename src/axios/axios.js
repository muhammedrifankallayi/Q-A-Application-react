import axios from "axios";
import { useNavigate } from "react-router-dom";



const URL = "http://localhost:4500";

const client = axios.create({ baseURL: URL });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accesstoken')}`
  const onSuccess = (response) => response
  const onError = (error) => {
      return error
  }

  return client(options).then(onSuccess).catch(onError)
}




