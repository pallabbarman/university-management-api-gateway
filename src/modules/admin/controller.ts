/* eslint-disable object-curly-newline */
import { Request, Response } from 'express';
import catchAsync from 'utils/catchAsync';
import sendResponse from 'utils/sendResponse';
import { editAdmin, findAdmin, findAllAdmins, removeAdmin } from './service';

export const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
    const result = await findAllAdmins(req);

    sendResponse(res, result);
});

export const getAdmin = catchAsync(async (req: Request, res: Response) => {
    const result = await findAdmin(req);

    sendResponse(res, result);
});

export const updateAdmin = catchAsync(async (req: Request, res: Response) => {
    const result = await editAdmin(req);

    sendResponse(res, result);
});

export const deleteAdmin = catchAsync(async (req: Request, res: Response) => {
    const result = await removeAdmin(req);

    sendResponse(res, result);
});
