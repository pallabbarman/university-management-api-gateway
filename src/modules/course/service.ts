import { Request } from 'express';
import { CoreService } from 'utils/axios';

export const insertCourse = async (req: Request) => {
    const response = await CoreService.post('/courses', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findAllCourses = async (req: Request) => {
    const response = await CoreService.get('/courses', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findCourse = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.get(`/courses/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const editCourse = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.patch(`/courses/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const removeCourse = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.delete(`/courses/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};
