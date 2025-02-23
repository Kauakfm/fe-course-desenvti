import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:8080/"
})


api.interceptors.response.use(async (response) => {
  return response
}, async (error) => {
  if (error.response.status == 401) {
      window.location.href = '/';
  }

  if (error.response.status == 403) {
      window.location.href = '/';
  }

  return error.response
})

export default api