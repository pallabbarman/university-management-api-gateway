import { Request } from 'express';
import { CoreService } from 'utils/axios';

export const insertAcademicFaculty = async (req: Request) => {
    const response = await CoreService.post('/academic-faculties', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findAllAcademicFaculties = async (req: Request) => {
    const response = await CoreService.get('/academic-faculties', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findAcademicFaculty = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.get(`/academic-faculties/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const editAcademicFaculty = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.patch(`/academic-faculties/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const removeAcademicFaculty = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.delete(`/academic-faculties/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};
