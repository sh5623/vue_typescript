import axios, { AxiosInstance } from 'axios';

export default class LocalApi {
  static readonly instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000 * 10,
  });
}
