/* eslint-disable import/prefer-default-export */

import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from 'utils/catchAsync';
import sendResponse from 'utils/sendResponse';
import { insertSemester } from './service';

export const createSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await insertSemester(req);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester is created successfully!',
        data: result,
    });
});
