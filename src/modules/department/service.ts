import { Request } from 'express';
import { CoreService } from 'utils/axios';

export const insertDepartment = async (req: Request) => {
    const response = await CoreService.post('/departments', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findAllDepartments = async (req: Request) => {
    const response = await CoreService.get('/departments', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findDepartment = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.get(`/departments/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const editDepartment = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.patch(`/departments/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const removeDepartment = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.delete(`/departments/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};
