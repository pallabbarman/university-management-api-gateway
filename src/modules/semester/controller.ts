import { Request, Response } from 'express';
import catchAsync from 'utils/catchAsync';
import sendResponse from 'utils/sendResponse';
import {
    editSemester,
    findAllSemesters,
    findSemester,
    insertSemester,
    removeSemester,
} from './service';

export const createSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await insertSemester(req);

    sendResponse(res, result);
});

export const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
    const result = await findAllSemesters(req);

    sendResponse(res, result);
});

export const getSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await findSemester(req);

    sendResponse(res, result);
});

export const updateSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await editSemester(req);

    sendResponse(res, result);
});

export const deleteSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await removeSemester(req);

    sendResponse(res, result);
});
