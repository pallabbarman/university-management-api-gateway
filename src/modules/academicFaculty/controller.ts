import { Request, Response } from 'express';
import catchAsync from 'utils/catchAsync';
import sendResponse from 'utils/sendResponse';
import {
    editAcademicFaculty,
    findAcademicFaculty,
    findAllAcademicFaculties,
    insertAcademicFaculty,
    removeAcademicFaculty,
} from './service';

export const createAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
    const result = await insertAcademicFaculty(req);

    sendResponse(res, result);
});

export const getAllAcademicFaculties = catchAsync(async (req: Request, res: Response) => {
    const result = await findAllAcademicFaculties(req);

    sendResponse(res, result);
});

export const getAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
    const result = await findAcademicFaculty(req);

    sendResponse(res, result);
});

export const updateAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
    const result = await editAcademicFaculty(req);

    sendResponse(res, result);
});

export const deleteAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
    const result = await removeAcademicFaculty(req);

    sendResponse(res, result);
});
