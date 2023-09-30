/* eslint-disable comma-dangle */
import axios, { AxiosInstance } from 'axios';
import configs from 'configs/index';

export const HttpService = (baseURL: string): AxiosInstance => {
    const instance = axios.create({
        baseURL,
        timeout: 1000,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    instance.interceptors.request.use(
        (config) => config,
        (error) => error
    );

    instance.interceptors.response.use(
        (response) => response.data,
        (error) => Promise.reject(error)
    );

    return instance;
};

export const AuthService = HttpService(configs.authServiceUrl);
export const CoreService = HttpService(configs.coreServiceUrl);
