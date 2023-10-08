import { Request } from 'express';
import { AuthService, CoreService } from 'utils/axios';

export const findAllFaculties = async (req: Request) => {
    const response = await CoreService.get('/faculties', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findFaculty = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.get(`/faculties/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const editFaculty = async (req: Request) => {
    const { id } = req.params;
    const response = await AuthService.patch(`/faculties/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const removeFaculty = async (req: Request) => {
    const { id } = req.params;
    const response = await AuthService.delete(`/faculties/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findMyCourse = async (req: Request) => {
    const response = await CoreService.get('/faculties/my-courses', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findMyCourseStudents = async (req: Request) => {
    const response = await CoreService.get('/faculties/my-course-students', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findFacultyProfile = async (req: Request) => {
    const { id } = req.params;
    const response = await AuthService.get(`/faculties/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};
