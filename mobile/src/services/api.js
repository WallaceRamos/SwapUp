import axios from 'axios';

global.IP_ADDRESS = 'https://swapup-backend.herokuapp.com' 

const api = axios.create({
  baseURL: global.IP_ADDRESS
});
export default api;