import { Response } from 'express';

const sendResponse = (res: Response, data: unknown): void => {
    res.send(data);
};

export default sendResponse;
