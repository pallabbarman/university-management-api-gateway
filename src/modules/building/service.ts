import { Request } from 'express';
import { CoreService } from 'utils/axios';

export const insertBuilding = async (req: Request) => {
    const response = await CoreService.post('/buildings', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findAllBuildings = async (req: Request) => {
    const response = await CoreService.get('/buildings', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const findBuilding = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.get(`/buildings/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const editBuilding = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.patch(`/buildings/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};

export const removeBuilding = async (req: Request) => {
    const { id } = req.params;
    const response = await CoreService.delete(`/buildings/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};
