/* eslint-disable import/prefer-default-export */
import { Request } from 'express';
import { CoreService } from 'utils/axios';

export const insertSemester = async (req: Request) => {
    const response = await CoreService.post('/semesters', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};
