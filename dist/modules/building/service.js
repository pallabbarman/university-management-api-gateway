"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBuilding = exports.editBuilding = exports.findBuilding = exports.findAllBuildings = exports.insertBuilding = void 0;
const axios_1 = require("../../utils/axios");
const insertBuilding = async (req) => {
    const response = await axios_1.CoreService.post('/buildings', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.insertBuilding = insertBuilding;
const findAllBuildings = async (req) => {
    const response = await axios_1.CoreService.get('/buildings', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findAllBuildings = findAllBuildings;
const findBuilding = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.get(`/buildings/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findBuilding = findBuilding;
const editBuilding = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.patch(`/buildings/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.editBuilding = editBuilding;
const removeBuilding = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.delete(`/buildings/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.removeBuilding = removeBuilding;
