import { Request } from 'express';
import { AuthService } from 'utils/axios';

export const findAllAdmins = async (req: Request) => {
    const response = await AuthService.get('/admins', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findAdmin = async (req: Request) => {
    const { id } = req.params;
    const response = await AuthService.get(`/admins/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const editAdmin = async (req: Request) => {
    const { id } = req.params;
    const response = await AuthService.patch(`/admins/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const removeAdmin = async (req: Request) => {
    const { id } = req.params;
    const response = await AuthService.delete(`/admins/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};
