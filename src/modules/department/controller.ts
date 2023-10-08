import { Request, Response } from 'express';
import catchAsync from 'utils/catchAsync';
import sendResponse from 'utils/sendResponse';
import {
    editDepartment,
    findAllDepartments,
    findDepartment,
    insertDepartment,
    removeDepartment,
} from './service';

export const createDepartment = catchAsync(async (req: Request, res: Response) => {
    const result = await insertDepartment(req);

    sendResponse(res, result);
});

export const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
    const result = await findAllDepartments(req);

    sendResponse(res, result);
});

export const getDepartment = catchAsync(async (req: Request, res: Response) => {
    const result = await findDepartment(req);

    sendResponse(res, result);
});

export const updateDepartment = catchAsync(async (req: Request, res: Response) => {
    const result = await editDepartment(req);

    sendResponse(res, result);
});

export const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
    const result = await removeDepartment(req);

    sendResponse(res, result);
});
