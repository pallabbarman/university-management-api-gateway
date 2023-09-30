import configs from 'configs/index';
import { createClient } from 'redis';
import { logger } from './logger';

const redisClient = createClient({
    url: configs.redis.url,
});

redisClient.on('error', (err) => logger.error('RedisError', err));
redisClient.on('connect', () => logger.info('Redis Connected'));

const redisConnect = async (): Promise<void> => {
    await redisClient.connect();
};

export default redisConnect;
