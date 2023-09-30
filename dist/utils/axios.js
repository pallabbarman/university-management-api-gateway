"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreService = exports.AuthService = exports.HttpService = void 0;
/* eslint-disable comma-dangle */
const axios_1 = __importDefault(require("axios"));
const index_1 = __importDefault(require("../configs/index"));
const HttpService = (baseURL) => {
    const instance = axios_1.default.create({
        baseURL,
        timeout: 1000,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    instance.interceptors.request.use((config) => config, (error) => error);
    instance.interceptors.response.use((response) => response.data, (error) => Promise.reject(error));
    return instance;
};
exports.HttpService = HttpService;
exports.AuthService = (0, exports.HttpService)(index_1.default.authServiceUrl);
exports.CoreService = (0, exports.HttpService)(index_1.default.coreServiceUrl);
