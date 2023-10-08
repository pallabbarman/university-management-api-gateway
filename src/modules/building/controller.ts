import { Request, Response } from 'express';
import catchAsync from 'utils/catchAsync';
import sendResponse from 'utils/sendResponse';
import {
    editBuilding,
    findAllBuildings,
    findBuilding,
    insertBuilding,
    removeBuilding,
} from './service';

export const createBuilding = catchAsync(async (req: Request, res: Response) => {
    const result = await insertBuilding(req);

    sendResponse(res, result);
});

export const getAllBuildings = catchAsync(async (req: Request, res: Response) => {
    const result = await findAllBuildings(req);

    sendResponse(res, result);
});

export const getBuilding = catchAsync(async (req: Request, res: Response) => {
    const result = await findBuilding(req);

    sendResponse(res, result);
});

export const updateBuilding = catchAsync(async (req: Request, res: Response) => {
    const result = await editBuilding(req);

    sendResponse(res, result);
});

export const deleteBuilding = catchAsync(async (req: Request, res: Response) => {
    const result = await removeBuilding(req);

    sendResponse(res, result);
});
