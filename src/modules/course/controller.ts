/* eslint-disable object-curly-newline */
import { Request, Response } from 'express';
import catchAsync from 'utils/catchAsync';
import sendResponse from 'utils/sendResponse';
import { editCourse, findAllCourses, findCourse, insertCourse, removeCourse } from './service';

export const createCourse = catchAsync(async (req: Request, res: Response) => {
    const result = await insertCourse(req);

    sendResponse(res, result);
});

export const getAllCourses = catchAsync(async (req: Request, res: Response) => {
    const result = await findAllCourses(req);

    sendResponse(res, result);
});

export const getCourse = catchAsync(async (req: Request, res: Response) => {
    const result = await findCourse(req);

    sendResponse(res, result);
});

export const updateCourse = catchAsync(async (req: Request, res: Response) => {
    const result = await editCourse(req);

    sendResponse(res, result);
});

export const deleteCourse = catchAsync(async (req: Request, res: Response) => {
    const result = await removeCourse(req);

    sendResponse(res, result);
});
