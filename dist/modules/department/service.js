"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDepartment = exports.editDepartment = exports.findDepartment = exports.findAllDepartments = exports.insertDepartment = void 0;
const axios_1 = require("../../utils/axios");
const insertDepartment = async (req) => {
    const response = await axios_1.CoreService.post('/departments', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.insertDepartment = insertDepartment;
const findAllDepartments = async (req) => {
    const response = await axios_1.CoreService.get('/departments', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findAllDepartments = findAllDepartments;
const findDepartment = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.get(`/departments/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findDepartment = findDepartment;
const editDepartment = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.patch(`/departments/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.editDepartment = editDepartment;
const removeDepartment = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.delete(`/departments/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.removeDepartment = removeDepartment;
