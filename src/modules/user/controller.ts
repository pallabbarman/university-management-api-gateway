/* eslint-disable import/prefer-default-export */

import { Request, Response } from 'express';
import catchAsync from 'utils/catchAsync';
import sendResponse from 'utils/sendResponse';
import { insertStudent } from './service';

export const createStudent = catchAsync(async (req: Request, res: Response) => {
    const result = await insertStudent(req);

    sendResponse(res, result);
});
