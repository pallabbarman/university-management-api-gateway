import { Request } from 'express';
import { CoreService } from 'utils/axios';

export const insertSemester = async (req: Request) => {
    const response = await CoreService.post('/semesters', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findAllSemesters = async (req: Request) => {
    const response = await CoreService.get('/semesters', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findSemester = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.get(`/semesters/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const editSemester = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.patch(`/semesters/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const removeSemester = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.delete(`/semesters/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};
