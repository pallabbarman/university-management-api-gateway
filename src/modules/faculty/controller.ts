import { Request, Response } from 'express';
import catchAsync from 'utils/catchAsync';
import sendResponse from 'utils/sendResponse';
import {
    editFaculty,
    findAllFaculties,
    findFaculty,
    findFacultyProfile,
    findMyCourse,
    findMyCourseStudents,
    removeFaculty,
} from './service';

export const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
    const result = await findAllFaculties(req);

    sendResponse(res, result);
});

export const getFaculty = catchAsync(async (req: Request, res: Response) => {
    const result = await findFaculty(req);

    sendResponse(res, result);
});

export const updateFaculty = catchAsync(async (req: Request, res: Response) => {
    const result = await editFaculty(req);

    sendResponse(res, result);
});

export const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
    const result = await removeFaculty(req);

    sendResponse(res, result);
});

export const getMyCourses = catchAsync(async (req: Request, res: Response) => {
    const result = await findMyCourse(req);

    sendResponse(res, result);
});

export const getMyCourseStudents = catchAsync(async (req: Request, res: Response) => {
    const result = await findMyCourseStudents(req);

    sendResponse(res, result);
});

export const getFacultyProfile = catchAsync(async (req: Request, res: Response) => {
    const result = await findFacultyProfile(req);

    sendResponse(res, result);
});
