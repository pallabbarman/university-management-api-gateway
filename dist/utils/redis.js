"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../configs/index"));
const redis_1 = require("redis");
const logger_1 = require("./logger");
const redisClient = (0, redis_1.createClient)({
    url: index_1.default.redis.url,
});
redisClient.on('error', (err) => logger_1.logger.error('RedisError', err));
redisClient.on('connect', () => logger_1.logger.info('Redis Connected'));
const redisConnect = async () => {
    await redisClient.connect();
};
exports.default = redisConnect;
