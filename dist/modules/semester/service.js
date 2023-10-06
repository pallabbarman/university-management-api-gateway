"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeSemester = exports.editSemester = exports.findSemester = exports.findAllSemesters = exports.insertSemester = void 0;
const axios_1 = require("../../utils/axios");
const insertSemester = async (req) => {
    const response = await axios_1.CoreService.post('/semesters', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.insertSemester = insertSemester;
const findAllSemesters = async (req) => {
    const response = await axios_1.CoreService.get('/semesters', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findAllSemesters = findAllSemesters;
const findSemester = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.get(`/semesters/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findSemester = findSemester;
const editSemester = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.patch(`/semesters/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.editSemester = editSemester;
const removeSemester = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.delete(`/semesters/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.removeSemester = removeSemester;
