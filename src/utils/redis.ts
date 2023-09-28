import { createClient } from 'redis';
import { logger } from './logger';

const redisClient = createClient({
    url: 'redis://localhost:6379',
});

redisClient.on('error', (err) => logger.error('RedisError', err));
redisClient.on('connect', () => logger.info('Redis Connected'));

const redisConnect = async (): Promise<void> => {
    await redisClient.connect();
};

export default redisConnect;
